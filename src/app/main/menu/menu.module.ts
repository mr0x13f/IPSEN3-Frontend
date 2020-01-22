
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


import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DeleteAccountComponent } from './account-settings/delete-account/delete-account.component';
import { ChangePasswordComponent } from './account-settings/change-password/change-password.component';
import { ChangeNameComponent } from './account-settings/change-name/change-name.component';
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
      AccountSettingsComponent,
      DeleteAccountComponent,
      ChangePasswordComponent,
      ChangeNameComponent
      
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
    entryComponents: [DeleteAccountComponent, ChangeNameComponent, ChangePasswordComponent],
    providers: [],
    bootstrap: []
  })
  export class MenuModule { }