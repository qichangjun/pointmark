import { Injectable } from '@angular/core';
import { Http, Headers, Response,URLSearchParams,RequestOptionsArgs,RequestOptions,BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { ConstantService } from '../../core/services/constant.service';
import { ApiUrlService } from '../../core/services/api-url.service'
import { ServiceHandleService } from '../../core/services/service-handle.service';

@Injectable()
export class LoginService {

  constructor(
    private http : Http,
    private _constantService  : ConstantService,
    private  _apiUrlService : ApiUrlService,
    public _ServiceHandleService : ServiceHandleService,
  ) {}

  login(paramete ?) : Promise<any> {    
    let post_data = paramete
    return this.http.post(this._constantService.baseUrl() + this._apiUrlService['login'],post_data)
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractDataSuccess(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  register(paramete ?) : Promise<any> {    
    let post_data = paramete
    return this.http.post(this._constantService.baseUrl() + this._apiUrlService['register'],post_data)
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractDataSuccess(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }
}
