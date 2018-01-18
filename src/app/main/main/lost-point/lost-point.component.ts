import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LostPointService } from './lost-point.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-lost-point',
  templateUrl: './lost-point.component.html',
  styleUrls: ['./lost-point.component.css'],
  providers: [LostPointService]
})
export class LostPointComponent implements OnInit {
  parameter : Params = {}
  rows : Array<any> = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lostPointService: LostPointService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .switchMap(async (params : Params) => {          
        this.parameter = Object.assign(this.parameter,params)
        return this.lostPointService.getList(this.parameter)
      })
      .subscribe(res => {
        this.rows = res.data;        
      });  
  }
}

class Params {
  sortField? : string;
}