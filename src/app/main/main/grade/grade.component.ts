import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from './grade.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css'],
  providers:[GradeService]
})
export class GradeComponent implements OnInit {
  parameter : Params = {};
  baseInfo : BaseInfo = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gradeService:GradeService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .switchMap(async (params : Params) => {          
        this.parameter = Object.assign(this.parameter,params)
        if (!this.parameter.id) {
          return 
        }
        return this.gradeService.getBaseInfo(params)
      })
      .subscribe(res => {
        if (!res){
          return
        }
        this.baseInfo = res.data;   
      });  
  }

}

class Params {
  id? : string;
}

class BaseInfo {

}