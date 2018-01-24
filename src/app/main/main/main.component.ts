import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[MainService]
})
export class MainComponent implements OnInit {  
  point : number = 71.45
  nodes = [];
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private mainService : MainService
  ) {}
  
  ngOnInit() {
    this.getTreeInfo()
  }

  async getTreeInfo(){
    let res = await this.mainService.getTreeInfo()
    this.nodes = res.tree    
  }

  changeNode(node){   
    function randomString(len) {
      　　len = len || 32;
      　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      　　var maxPos = $chars.length;
      　　var pwd = '';
      　　for (let i = 0; i < len; i++) {
      　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      　　}
      　　return pwd;
      }   
    if (this.route.snapshot.children[0].routeConfig.path == 'resolveMission'){    
      this.router.navigate([], { queryParams: {id:node.data.id,q:randomString(11)} }); //在grade或resolveMission中，点击子节点，改变路由参数    
      return 
    }
    if (node.data.nodeType != 'bottom'){ //当点击的非最子节点时，在原路由不动，删除id参数
      this.router.navigate([], { queryParams: {id:'',q:randomString(11)},queryParamsHandling:'merge' });
      return 
    }  
    if (this.route.snapshot.children[0]){ //当在子路由homePage或lostPoint中，点击子节点跳转至grade路由
      if (this.route.snapshot.children[0].routeConfig.path == 'homePage' || this.route.snapshot.children[0].routeConfig.path =='lostPoint'){
        this.router.navigate(['main/grade'], { queryParams: {id:node.data.id,q:randomString(11)},queryParamsHandling:'merge' });  
        return   
      } 
    }
    this.router.navigate([], { queryParams: {id:node.data.id,q:randomString(11)} }); //在grade或resolveMission中，点击子节点，改变路由参数
  }
}
