import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ChangeNameComponent } from './change-name/change-name.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {


  constructor(private overlay: Overlay, 
    private viewContainerRef: ViewContainerRef,
    private dialog: MatDialog) {}

  ngOnInit() {
  }

  showChanceName(){
    this.dialog.open(ChangeNameComponent);
  }

  showChancePassword(){
    this.dialog.open(ChangePasswordComponent);
  }

  showDeleteAccount(){
    this.dialog.open(DeleteAccountComponent);
  }



}


