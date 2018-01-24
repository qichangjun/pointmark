import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LostPointService } from './lost-point.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-lost-point',
  templateUrl: './lost-point.component.html',
  styleUrls: ['./lost-point.component.scss'],
  providers: [LostPointService]
})
export class LostPointComponent implements OnInit {
  parameter : Params = {}
  rows : Array<any> = [];
  keywordLists : Array<any> = [];
  baseInfo : BaseInfo = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lostPointService: LostPointService
  ) { }

  ngOnInit() {
    this.keywordLists = this.lostPointService.getKeywordLists();
    this.route.queryParams
      .switchMap(async (params : Params) => {          
        this.parameter = Object.assign(this.parameter,params)
        this.parameter.keywords = this.parameter.keywords || 'all'
        return this.lostPointService.getList(this.parameter.keywords)
      })
      .subscribe(res => {
        this.rows = res.scoreReduceItems; 
        this.baseInfo = {
          currentScore : res.currentScore,
          totalScore : res.totalScore
        }              
      });  
  }
}

class Params {
  keywords? : string;
}

class BaseInfo {
  currentScore? : string;
  totalScore? : string;
}