import { Injectable } from '@angular/core';

@Injectable()
export class GradeService {

  constructor() { }
  getBaseInfo(info){
    return {
      data : info
    }
  }
}
