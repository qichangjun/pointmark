import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { PointTreeComponent } from './component/point-tree/point-tree.component';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,ReactiveFormsModule,
    TreeModule,
    HttpModule
  ],
  exports:[
    CommonModule,
    HttpModule,
    FormsModule,ReactiveFormsModule,
    NavBarComponent,PointTreeComponent
  ],
  declarations: [NavBarComponent, PointTreeComponent]
})
export class ShareModule {}
