import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { PointTreeComponent } from './component/point-tree/point-tree.component';
import { TreeModule } from 'angular-tree-component';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { AddNodeDialogComponent } from './component/point-tree/dialog/add-node-dialog.component'
import { DeleteNodeDialogComponent } from './component/point-tree/dialog/delete-node-dialog.component';

import { MatButtonModule,
  MatDialogModule,MatDialogConfig,MatFormFieldModule,
  MatSelectModule,  
  MatMenuModule,MatRadioModule
} from '@angular/material';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,ReactiveFormsModule,
    TreeModule,
    HttpModule,
    MatButtonModule,
    MatDialogModule,MatFormFieldModule,
    MatSelectModule,  
    MatMenuModule,MatRadioModule
  ],
  exports:[
    CommonModule,
    HttpModule,
    FormsModule,ReactiveFormsModule,
    NavBarComponent,PointTreeComponent,DateFormatPipe,
    MatButtonModule,
    MatDialogModule,MatFormFieldModule,
    MatSelectModule,  MatRadioModule,
    MatMenuModule
  ],
  declarations: [NavBarComponent, PointTreeComponent,DateFormatPipe,AddNodeDialogComponent,DeleteNodeDialogComponent],
  entryComponents:[AddNodeDialogComponent,DeleteNodeDialogComponent]
})
export class ShareModule {}
