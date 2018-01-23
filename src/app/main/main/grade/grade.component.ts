import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from './grade.service';
import 'rxjs/add/operator/switchMap';
import { ConstantService } from '../../../core/services/constant.service';
import { AuthService } from '../../../core/services/auth.service';
import { ApiUrlService } from '../../../core/services/api-url.service';
import { FileSelectDirective, FileDropDirective, FileUploader,FileUploaderOptions } from 'ng2-file-upload/ng2-file-upload';
import { Params,BaseInfo,SourceList,QuestionList,NewQuestion,NewSource } from './grade.class';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
declare var toastr:any;
@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css'],
  providers:[GradeService],
  animations: [
    trigger('toggleExpand',  [
      state('0', style({
        'height': '0',
        overflow:'hidden'
      })),
      state('1', style({
        'height': '*',
        overflow:'hidden'
      })),
      transition('0 <=> 1', animate('300ms ease-in-out'))
    ])   
  ]
})
export class GradeComponent implements OnInit,AfterViewInit {
  public uploader:FileUploader;
  dropZone : any = null;
  uploadingLists : Array<any> = [];
  parameter : Params = {};
  baseInfo : BaseInfo = {};
  sourceList : Array<SourceList> = [];
  questionList : Array<QuestionList> = [];
  fileList : Array<FileList> = [];
  newQuestion : NewQuestion = {
    questionDes : '',
    questionStatus : 0
  }
  newSource : NewSource = {
    description : '',
    score : 0
  }  
  isOpenQuestionForm : boolean = false;
  isOpenSourceForm : boolean = false;
  isOpenFileForm : boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gradeService:GradeService,
    private _constantService : ConstantService,
    private _AuthService : AuthService,
    private _apiUrlService : ApiUrlService
  ) {}

  ngOnInit() {
    this.uploader = new FileUploader({autoUpload:true,url: this._constantService.baseUrl() + this._apiUrlService.upload,
      additionalParameter: {
        accessToken : this._AuthService.getCurrentUser().accessToken,
        accessUser : this._AuthService.getCurrentUser().accessKey
      }});
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
        this.getQuestionList();
        this.getSorceRecordList();
        this.getFileList();
      });  
  }

  ngAfterViewInit(){
    this.uploader.onBeforeUploadItem = (fileItem) =>{            
      this.uploader.options.additionalParameter['quotaId'] = this.parameter.id
    }
    this.uploader.onCompleteAll = ()=>{
      this.getFileList()
    }
    this.uploader.onSuccessItem = (item,res) =>{
      if(res){
        let data = JSON.parse(res)
        if (data.code == 1){
          item.isSuccess = true  
          return 
        }
        item.isSuccess = false
        item.isError = true
        toastr.error(data.message)
      } 
    }
  }

  //获取问题清单列表
  async getQuestionList(){
    let res = await this.gradeService.getQuestionList(this.parameter.id)
    this.questionList = res.questions;
  }
  //删除问题清单列表
  async deleteQuestion(id){
    await this.gradeService.deleteQuestion(id)
    this.getQuestionList();
  }
  //添加问题清单列表
  async addQuestion(){
    await this.gradeService.addQuestion(this.parameter.id,this.newQuestion)
    this.newQuestion = {
      questionDes : '',
      questionStatus : 0
    }
    this.getQuestionList();
  }
  //更新问题清单列表状态
  async updateQuestion(id,questionStatus){
    await this.gradeService.updateQuestion(id,questionStatus)
    this.getQuestionList();
  }
  //获取自查记录
  async getSorceRecordList(){
    let res = await this.gradeService.getSorceRecordList(this.parameter.id)
    this.sourceList = res.scoreRecords
  }
  //删除自查记录
  async deleteSource(source){
    await this.gradeService.deleteSource(source.id)
    this.getSorceRecordList();
  }
  //添加自查记录
  async addSource(){
    await this.gradeService.addSource(this.parameter.id,this.newSource)
    this.newSource = {
      description : '',
      score : 0
    };
    this.getSorceRecordList();
  }
  //获取材料列表
  async getFileList(){
    let res = await this.gradeService.getFileList(this.parameter.id)
    this.fileList = res.files
  }
  //删除材料
  async deleteFile(file){
    await this.gradeService.deleteFile(file.id)
    this.getFileList();
  }
  
}
