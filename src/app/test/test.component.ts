import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    
  constructor(private overlay: Overlay, 
    private viewContainerRef: ViewContainerRef,
    private dialog: MatDialog) {}

  ngOnInit() {
  }

  showPreview(){
    this.dialog.open(PopupComponent);
  }

  

}