import { Component, OnInit, ViewChild } from '@angular/core';
import { ConstantService } from '../../../core/services/constant.service';
import { AuthService } from '../../../core/services/auth.service';
import { ApiUrlService } from '../../../core/services/api-url.service';
import { FileSelectDirective, FileDropDirective, FileUploader,FileUploaderOptions } from 'ng2-file-upload/ng2-file-upload';
import { GradeService } from '../grade/grade.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

declare var toastr:any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('toggleExpand',  [
      state('0', style({
        'height': '0',
        overflow:'hidden'
      })),
      state('1', style({
        'height':'*',
        overflow:'hidden'
      })),
      transition('0 <=> 1', animate('300ms ease-in-out'))
    ])   
  ],
  providers:[GradeService]
})
export class HomePageComponent implements OnInit {
  @ViewChild('uploadContainer') uploadContainer:any;
  uploadingFile : any;
  isUploading : boolean = false;
  dropZone : any;
  isOpenFileForm : boolean = false;
  baseInfo : any = {}
  fileList : any = []
  public uploader:FileUploader;
  constructor(
    private _constantService : ConstantService,
    private _AuthService : AuthService,
    private _apiUrlService : ApiUrlService,
    private _gradeService : GradeService
  ) { }

  ngOnInit() {
    this.uploader = new FileUploader({autoUpload:true,url: this._constantService.baseUrl() + this._apiUrlService.upload,
      additionalParameter: {
        accessToken : this._AuthService.getCurrentUser().accessToken,
        accessKey : this._AuthService.getCurrentUser().accessKey
      }});

    this.uploader.onBeforeUploadItem = (fileItem) =>{            
      this.uploader.options.additionalParameter['quotaId'] = 0
    }
    this.uploader.onCompleteAll = ()=>{
      this.getFileList()
    }
    this.uploader.onSuccessItem = (item,res) =>{
      if(res){
        let data = JSON.parse(res)
        if (data.code == 1){
          item.isSuccess = true  
          toastr.success(data.message)
          item.remove()
          return 
        }
        item.isSuccess = false
        item.isError = true
        toastr.error(data.message)
      } 
    }
    this.getBaseInfo()
    this.getFileList()
  }

  async getBaseInfo(){
    let res = await this._gradeService.getBaseInfo(0)
    this.baseInfo = res
  }

  async getFileList(){
    let res = await this._gradeService.getFileList(0)
    this.fileList = res.files
  }

  async deleteFile(file){
    await this._gradeService.deleteFile(file.id)
    this.getFileList();
  }
}
