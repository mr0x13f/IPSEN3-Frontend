import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  

  constructor(public dialogRef: MatDialogRef<DeleteAccountComponent>) { }

  ngOnInit() {
    
  }

  closeDeleteAccountPopup(){
    this.dialogRef.close();
  }

  

}
