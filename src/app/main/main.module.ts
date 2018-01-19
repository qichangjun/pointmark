import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { ShareModule } from '../share/share.module';
import { GradeComponent } from './main/grade/grade.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { LostPointComponent } from './main/lost-point/lost-point.component';
import { ResolveMissionComponent } from './main/resolve-mission/resolve-mission.component';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
@NgModule({
  imports: [
    FileUploadModule,
    ShareModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, GradeComponent, HomePageComponent, LostPointComponent, ResolveMissionComponent]
})
export class MainModule { }
