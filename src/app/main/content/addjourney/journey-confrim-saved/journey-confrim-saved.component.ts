import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-journey-confrim-saved',
  templateUrl: './journey-confrim-saved.component.html',
  styleUrls: ['./journey-confrim-saved.component.css']
})
export class JourneyConfrimSavedComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<JourneyConfrimSavedComponent>) { }

  ngOnInit() {
  }

  closeJourneySavedPopup(){
    this.dialogRef.close();
  }
}
