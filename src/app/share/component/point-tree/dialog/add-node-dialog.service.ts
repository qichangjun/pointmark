import { Injectable } from '@angular/core';
import { Http, Headers, Response,URLSearchParams,RequestOptionsArgs,RequestOptions,BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { ConstantService } from '../../../../core/services/constant.service';
import { ApiUrlService } from '../../../../core/services/api-url.service'
import { ServiceHandleService } from '../../../../core/services/service-handle.service';
import { AuthService } from '../../../../core/services/auth.service';

@Injectable()
export class AddNodeService {

  constructor(
    private http : Http,
    private _constantService  : ConstantService,
    private  _apiUrlService : ApiUrlService,
    public _ServiceHandleService : ServiceHandleService,
    private _AuthService : AuthService
  ) { }

  addNode(parameter?) : Promise<any> {    
    let post_data = parameter
    let params = new URLSearchParams();
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.post(this._constantService.baseUrl() + this._apiUrlService['addNode'],post_data,{search : params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractDataSuccess(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }
}
