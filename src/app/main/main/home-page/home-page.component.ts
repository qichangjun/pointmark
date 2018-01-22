import { Component, OnInit, ViewChild } from '@angular/core';
import { ConstantService } from '../../../core/services/constant.service';
import { AuthService } from '../../../core/services/auth.service';
import { ApiUrlService } from '../../../core/services/api-url.service';
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
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('toggleExpand',  [
      state('0', style({
        'max-height': '0px',
        overflow:'hidden'
      })),
      state('1', style({
        'max-height': '300px',
        overflow:'hidden'
      })),
      transition('0 <=> 1', animate('300ms ease-in-out'))
    ])   
  ]
})
export class HomePageComponent implements OnInit {
  @ViewChild('uploadContainer') uploadContainer:any;
  uploadingFile : any;
  isUploading : boolean = false;
  dropZone : any;
  isOpenFileForm : boolean = false;
  constructor(
    private _constantService : ConstantService,
    private _AuthService : AuthService,
    private _apiUrlService : ApiUrlService
  ) { }

  ngOnInit() {

  }

}
