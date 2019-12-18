
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
import { AccountSettingsComponent } from './sidebar/account-settings/account-settings.component';
import { DeleteAccountComponent } from './sidebar/account-settings/delete-account/delete-account.component';
import { ChangePasswordComponent } from './sidebar/account-settings/change-password/change-password.component';
import { ChangeNameComponent } from './sidebar/account-settings/change-name/change-name.component';
  
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
      material
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