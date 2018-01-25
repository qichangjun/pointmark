import { Component, OnInit,Output,EventEmitter,ViewChild,AfterViewInit,Input,OnChanges } from '@angular/core';
import { TreeNode } from 'angular-tree-component';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogRef,MatDialogConfig } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AddNodeDialogComponent } from './dialog/add-node-dialog.component';
import { updateTreeService } from '../../../core/services/behavior.service';
@Component({
  selector: 'app-point-tree',
  templateUrl: './point-tree.component.html',
  styleUrls: ['./point-tree.component.scss']
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
    })
  };
  _nodes = [];
  isResolveMissionPath : boolean = false
  options = {levelPadding:0,animateExpand:true,childrenField:'childList',actionMapping:{
    mouse:{
      click:(tree,node,$event)=>{       
        node.expand()
        this.changeNode.emit(node)
      }
    }
  }}
  parameter : Params = {}

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public _updateTreeService : updateTreeService
  ) {
    router.events.subscribe(e =>{
      if (e instanceof NavigationEnd) {
        if (e.url.indexOf('resolveMission') != -1){
          this.isResolveMissionPath = true
        }else{
          this.isResolveMissionPath = false
        }
    } 
    })
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

  addNode(node){
    let config = new MatDialogConfig();
    config.data = {
      node : node
    }
    let dialogRef = this.dialog.open(AddNodeDialogComponent,config);
    dialogRef.afterClosed().subscribe((res) =>{
      if (res){
        this._updateTreeService.toggleEvent({update:true})
        return 
      }
    })
  }
}

class Params {
  id? : string;
}
