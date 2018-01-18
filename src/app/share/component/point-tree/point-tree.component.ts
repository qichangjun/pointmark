import { Component, OnInit,Output,EventEmitter,ViewChild,AfterViewInit } from '@angular/core';
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
  options = {
  }
  nodes = [
    {
      id: 1,
      name: '数字档案馆系统测试指标表',
      type: 'root',
      owner: ['办','信'],
      children: [
        { id: 2, name: '1 基础设施',owner: ['办'],root:'unit',children:
          [
            {id: 21, name: '1.1 主机房',owner: ['办','信'],type:'childUnit'},
            {id: 22, name: '1.2 网络平台',type:'childUnit',children:[
              {id:221,name:'1.1.1 ',owner: ['办'],type:'item'}
            ]}
          ]        
        }
      ]
    }   
  ];
  parameter : Params = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){

  }
  ngAfterViewInit() {
    this.route.queryParams
      .subscribe((param : Params)=>{
        if (!param.id){          
          this.tree.treeModel.activeNodeIds = {}
          this.tree.treeModel.focusedNodeId = null;
        }else{      
          let node = this.tree.treeModel.getNodeById(param.id)
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