import { Injectable } from '@angular/core';

@Injectable()
export class LostPointService {

  constructor() { }
  getList(params){
    return {
      data : [
          {
              title : '1.2.2局域网主干线路采用光纤铺设',
              mark : '0.1',
              point : '0.3',
              markDate : '2016-10-17',
              id : 221
          }
      ]
    }
  }
}
