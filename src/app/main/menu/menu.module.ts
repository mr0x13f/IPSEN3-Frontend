
import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent } from './sidebar/projects/projects.component';
import { CompaniesComponent } from './sidebar/companies/companies.component';

import { 
    MatToolbarModule, 
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule
  } from '@angular/material';


import { AccountSettingsComponent } from '../header/account-settings/account-settings.component';
import { DeleteAccountComponent } from '../header/account-settings/delete-account/delete-account.component';
import { ChangePasswordComponent } from '../header/account-settings/change-password/change-password.component';
import { ChangeNameComponent } from '../header/account-settings/change-name/change-name.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
  
  const material = [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule
  ];  

@NgModule({
    declarations: [
      MenuComponent,
      SidebarComponent,
      ProjectsComponent,
      CompaniesComponent,
       
    ],
    imports: [
      material,
      ReactiveFormsModule,
      FormsModule

    ],
    exports: [
        MenuComponent,
        SidebarComponent
    ],
    entryComponents: [ ],
    providers: [],
    bootstrap: []
  })
  export class MenuModule { }