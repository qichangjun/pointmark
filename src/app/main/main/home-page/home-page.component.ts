import { Component, OnInit, ViewChild } from '@angular/core';
import { ConstantService } from '../../../core/services/constant.service';
import { AuthService } from '../../../core/services/auth.service';
import { ApiUrlService } from '../../../core/services/api-url.service';

declare var toastr:any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('uploadContainer') uploadContainer:any;
  uploadingFile : any;
  isUploading : boolean = false;
  dropZone : any;
  constructor(
    private _constantService : ConstantService,
    private _AuthService : AuthService,
    private _apiUrlService : ApiUrlService
  ) { }

  ngOnInit() {

  }

}
