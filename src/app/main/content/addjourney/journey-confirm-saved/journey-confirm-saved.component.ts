import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-journey-confirm-saved',
  templateUrl: './journey-confirm-saved.component.html',
  styleUrls: ['./journey-confirm-saved.component.css']
})
export class JourneyConfirmSavedComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<JourneyConfirmSavedComponent>
  ) { }

  ngOnInit() {
  }

  closeJourneySavedPopup(){
    this.dialogRef.close();
  }
}
