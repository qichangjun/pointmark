import { Injectable } from '@angular/core';
import { Http, Headers, Response,URLSearchParams,RequestOptionsArgs,RequestOptions,BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { ConstantService } from '../../../core/services/constant.service';
import { ApiUrlService } from '../../../core/services/api-url.service'
import { ServiceHandleService } from '../../../core/services/service-handle.service';
import { AuthService } from '../../../core/services/auth.service';

@Injectable()
export class HomePageService {

  constructor(
    private http : Http,
    private _constantService  : ConstantService,
    private  _apiUrlService : ApiUrlService,
    public _ServiceHandleService : ServiceHandleService,
    private _AuthService : AuthService
  ) { }
  getList(keywords) : Promise<any> {
    let params = new URLSearchParams();
    params.set('keywords',keywords)
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.get(this._constantService.baseUrl() + this._apiUrlService['scoreReduceDetailList'],{search:params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractData(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  getKeywordLists() {
    return [
      {displayName:'所有', value:'all'},
      {displayName:'业', value:'业'},
      {displayName:'人', value:'人'},
      {displayName:'办', value:'办'},
      {displayName:'征', value:'征'},
      {displayName:'编', value:'编'},
      {displayName:'信', value:'信'},
      {displayName:'保', value:'保'}      
    ]
  }
}
