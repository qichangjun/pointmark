import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { ResolveMissionService } from './resolve-mission.service';

@Component({
  selector: 'app-resolve-mission',
  templateUrl: './resolve-mission.component.html',
  styleUrls: ['./resolve-mission.component.css'],
  providers: [ResolveMissionService]
})
export class ResolveMissionComponent implements OnInit {
  parameter : Params = {}
  baseInfo : any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resolveMissionService : ResolveMissionService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .switchMap(async (params : Params) => {          
        this.parameter = Object.assign(this.parameter,params)
        if (!this.parameter.id) {
          return 
        }
        return this.resolveMissionService.getBaseInfo(params)
      })
      .subscribe(res => {
        this.baseInfo = res;
        return 
      });
  }

  updateMission(){
    
  }
}

class Params {
  id? : string;
}