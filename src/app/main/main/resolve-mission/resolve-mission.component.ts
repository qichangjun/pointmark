import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { ResolveMissionService } from './resolve-mission.service';
import { GradeService } from '../grade/grade.service'
import { BaseInfo } from '../grade/grade.class';

@Component({
  selector: 'app-resolve-mission',
  templateUrl: './resolve-mission.component.html',
  styleUrls: ['./resolve-mission.component.scss'],
  providers: [ResolveMissionService,GradeService]
})
export class ResolveMissionComponent implements OnInit {
  parameter : Params = {}
  baseInfo : BaseInfo = {
    dutyDept : ''
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resolveMissionService : ResolveMissionService,
    private gradeService : GradeService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .switchMap(async (params : Params) => {          
        this.parameter = Object.assign(this.parameter,params)
        if (!this.parameter.id) {
          return 
        }
        return this.gradeService.getBaseInfo(params.id)
      })
      .subscribe(res => {
        if (!res){
          return 
        }        
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