import { Component, OnInit,Inject } from '@angular/core';

import { MatDialog, MatDialogRef,MatDialogConfig } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { BaseInfo } from '../../../../main/main/grade/grade.class';
import { AddNodeService } from './add-node-dialog.service';


@Component({
  selector: 'add-node-dialog',
  templateUrl: './add-node-dialog.component.html',
  styleUrls: ['./add-node-dialog.component.scss'],
  providers: [AddNodeService]
})
export class AddNodeDialogComponent implements OnInit {
  baseInfo : BaseInfo = {}
  constructor(
    private _addNodeService : AddNodeService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<AddNodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }  
  ngOnInit() {
      console.log(this.data)
  }

  cancel(){
    this.dialogRef.close(false);
  }

  async addNode(){
    await this._addNodeService.addNode(this.baseInfo)
    this.dialogRef.close(true)
  }
}
