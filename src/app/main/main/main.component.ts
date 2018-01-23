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
    this.nodes = [
      {
          "name":"数字档案馆系统测试指标表",
          "childList":[
              {
                  "name":"1 基础设施",
                  "childList":[
                      {
                          "name":"1.1 主机房",
                          "childList":[
                              {
                                  "name":"1.1.1",
                                  "childList":[

                                  ],
                                  "id":"111",
                                  "nodeType":"bottom",
                                  "parentId":"11"
                              },
                              {
                                  "name":"1.1.2",
                                  "childList":[
                                      {
                                          "name":"1.1.2.1",
                                          "childList":[

                                          ],
                                          "id":"1121",
                                          "nodeType":"bottom",
                                          "parentId":"112"
                                      },
                                      {
                                          "name":"1.1.2.2",
                                          "childList":[

                                          ],
                                          "id":"1122",
                                          "nodeType":"bottom",
                                          "parentId":"112"
                                      }
                                  ],
                                  "id":"112",
                                  "nodeType":null,
                                  "parentId":"11"
                              },
                              {
                                  "name":"1.1.3",
                                  "childList":[
                                      {
                                          "name":"1.1.3.1",
                                          "childList":[

                                          ],
                                          "id":"1131",
                                          "nodeType":"bottom",
                                          "parentId":"113"
                                      },
                                      {
                                          "name":"1.1.3.2",
                                          "childList":[

                                          ],
                                          "id":"1132",
                                          "nodeType":"bottom",
                                          "parentId":"113"
                                      }
                                  ],
                                  "id":"113",
                                  "nodeType":null,
                                  "parentId":"11"
                              },
                              {
                                  "name":"1.1.4",
                                  "childList":[

                                  ],
                                  "id":"114",
                                  "nodeType":"bottom",
                                  "parentId":"11"
                              },
                              {
                                  "name":"1.1.5",
                                  "childList":[

                                  ],
                                  "id":"115",
                                  "nodeType":"bottom",
                                  "parentId":"11"
                              }
                          ],
                          "id":"11",
                          "nodeType":null,
                          "parentId":"1"
                      },
                      {
                          "name":"1.2 网络平台",
                          "childList":[

                          ],
                          "id":"12",
                          "nodeType":null,
                          "parentId":"1"
                      },
                      {
                          "name":"1.3 服务器及存储备份设备",
                          "childList":[

                          ],
                          "id":"13",
                          "nodeType":null,
                          "parentId":"1"
                      },
                      {
                          "name":"1.4 终端设备",
                          "childList":[

                          ],
                          "id":"14",
                          "nodeType":null,
                          "parentId":"1"
                      },
                      {
                          "name":"1.5 档案数字化设施、设备",
                          "childList":[

                          ],
                          "id":"15",
                          "nodeType":null,
                          "parentId":"1"
                      },
                      {
                          "name":"1.6 音视频等其他硬件设备",
                          "childList":[

                          ],
                          "id":"16",
                          "nodeType":null,
                          "parentId":"1"
                      },
                      {
                          "name":"1.7 基础软件",
                          "childList":[

                          ],
                          "id":"17",
                          "nodeType":null,
                          "parentId":"1"
                      }
                  ],
                  "id":"1",
                  "nodeType":null,
                  "parentId":"0"
              },
              {
                  "name":"2 系统功能",
                  "childList":[

                  ],
                  "id":"2",
                  "nodeType":null,
                  "parentId":"0"
              },
              {
                  "name":"3 档案资源",
                  "childList":[

                  ],
                  "id":"3",
                  "nodeType":null,
                  "parentId":"0"
              },
              {
                  "name":"4 保障体系",
                  "childList":[

                  ],
                  "id":"4",
                  "nodeType":null,
                  "parentId":"0"
              },
              {
                  "name":"5 服务绩效",
                  "childList":[

                  ],
                  "id":"5",
                  "nodeType":null,
                  "parentId":"0"
              }
          ],
          "id":"0",
          "nodeType":null,
          "parentId":"root"
      }
  ]
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
