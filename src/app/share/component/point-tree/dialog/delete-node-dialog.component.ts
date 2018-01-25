import { Component, OnInit,Inject } from '@angular/core';

import { MatDialog, MatDialogRef,MatDialogConfig } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { BaseInfo } from '../../../../main/main/grade/grade.class';
import { AddNodeService } from './add-node-dialog.service';


@Component({
  selector: 'delete-node-dialog',
  templateUrl: './delete-node-dialog.component.html',
  styleUrls: ['./add-node-dialog.component.scss'],
  providers: [AddNodeService]
})
export class DeleteNodeDialogComponent implements OnInit {
  baseInfo : BaseInfo = {
    nodeType : ""
  }
  constructor(
    private _addNodeService : AddNodeService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteNodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }  
  ngOnInit() {      
  }

  cancel(){
    this.dialogRef.close(false);
  }

  async deleteNode(){
    await this._addNodeService.deleteNode(this.data.node.data.id)
    this.dialogRef.close(true)
  }
}
