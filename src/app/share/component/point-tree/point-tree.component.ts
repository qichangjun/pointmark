import { Component, OnInit,Output,EventEmitter,ViewChild,AfterViewInit,Input,OnChanges } from '@angular/core';
import { TreeNode } from 'angular-tree-component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-point-tree',
  templateUrl: './point-tree.component.html',
  styleUrls: ['./point-tree.component.css']
})
export class PointTreeComponent implements OnInit ,AfterViewInit{
  @ViewChild('tree') tree:any;
  @Output() changeNode : EventEmitter<any> = new EventEmitter();
  @Input()   
  set nodes(nodes){    
    this._nodes = nodes;
    if (this._nodes.length == 0 || !this.parameter.id){
      return 
    }        
    setTimeout(()=>{
      let node = this.tree.treeModel.getNodeById(this.parameter.id);        
      if (!node){
        console.error('没有在树节点中找到id为' + this.parameter.id + '的节点')
        return
      }
      this.expandNode(node);
      this.tree.treeModel.setFocusedNode(node)
    },100)    
  };
  _nodes = [];
  options = {animateExpand:true,childrenField:'childList'}
  
  parameter : Params = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    
   }

  ngOnInit(){
    
  }

  ngAfterViewInit() {
    this.route.queryParams
      .subscribe((param : Params)=>{        
        if (!param.id){          
          this.tree.treeModel.activeNodeIds = {}
          this.tree.treeModel.focusedNodeId = null;
        }else{
          this.parameter.id = param.id     
          let node = this.tree.treeModel.getNodeById(this.parameter.id);        
          if (!node){
            console.error('没有在树节点中找到id为' + this.parameter.id + '的节点')
            return
          }
          this.expandNode(node);
          this.tree.treeModel.setFocusedNode(node)                    
        }
      })
  }

  expandNode(node){        
    node.expand()
    if (node.parent){
      this.expandNode(node.parent)
    }
  }

  go(node){
    this.changeNode.emit(node)
  }
}

class Params {
  id? : string;
}