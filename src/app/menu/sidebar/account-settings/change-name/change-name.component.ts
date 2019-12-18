import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ChangeNameComponent>) { }

  ngOnInit() {
    
  }

  closeChangeNamePopup(){
    this.dialogRef.close();
    
  }

}
