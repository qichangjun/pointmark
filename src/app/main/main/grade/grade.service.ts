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
export class GradeService {

  constructor(
    private http : Http,
    private _constantService  : ConstantService,
    private  _apiUrlService : ApiUrlService,
    public _ServiceHandleService : ServiceHandleService,
    private _AuthService : AuthService
  ) { }
  getBaseInfo(id ?) : Promise<any> {    
    let params = new URLSearchParams();
    params.set('id',id)
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.get(this._constantService.baseUrl() + this._apiUrlService['quotaInfo'],{search : params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractData(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  getQuestionList(id ?) : Promise<any> {    
    let params = new URLSearchParams();
    params.set('quotaId',id)
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.get(this._constantService.baseUrl() + this._apiUrlService['getQuestionList'],{search : params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractData(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  deleteQuestion(id?) : Promise<any> {
    let post_data = {id : id}
    let params = new URLSearchParams();
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.post(this._constantService.baseUrl() + this._apiUrlService['deleteQuestion'],post_data,{search:params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractDataSuccess(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  addQuestion(id,parameter) : Promise<any> {
    let post_data = {
      quotaId : id,
      questionDes : parameter.questionDes,
      questionStatus : parameter.questionStatus
    }  
    let params = new URLSearchParams();
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.post(this._constantService.baseUrl() + this._apiUrlService['addQuestion'],post_data,{search:params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractDataSuccess(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  updateQuestion(id,status) : Promise<any> {
    let post_data = {
      id : id,      
      questionStatus : status
    }  
    let params = new URLSearchParams();
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.post(this._constantService.baseUrl() + this._apiUrlService['updateQuestion'],post_data,{search:params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractDataSuccess(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  getSorceRecordList(id) : Promise<any> {
    let params = new URLSearchParams();
    params.set('quotaId',id)
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.get(this._constantService.baseUrl() + this._apiUrlService['getSorceRecordList'],{search:params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractData(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  deleteSource(id)  : Promise<any> {
    let params = new URLSearchParams();
    params.set('id','111')
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.get(this._constantService.baseUrl() + this._apiUrlService['deleteSource'],{search:params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractDataSuccess(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  addSource(id,parameter)  : Promise<any> {
    let params = new URLSearchParams();
    params.set('quotaId',id)
    params.set('score',parameter.score)
    params.set('description',parameter.description)
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.get(this._constantService.baseUrl() + this._apiUrlService['addSource'],{search:params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractDataSuccess(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  getFileList(id) : Promise<any> {
    let params = new URLSearchParams();
    params.set('quotaId',id)
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.get(this._constantService.baseUrl() + this._apiUrlService['getFileList'],{search:params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractData(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }

  deleteFile(id) : Promise<any> {
    let params = new URLSearchParams();
    params.set('id','1111')
    params.set('accessKey',this._AuthService.getCurrentUser().accessKey)
    params.set('accessToken',this._AuthService.getCurrentUser().accessToken)
    return this.http.get(this._constantService.baseUrl() + this._apiUrlService['deleteFile'],{search:params})
                    .toPromise()
                    .then(res =>
                      this._ServiceHandleService.extractDataSuccess(res)
                    )
                    .catch(error =>
                      this._ServiceHandleService.handleError(error)
                    );
  }
}
