
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
      CompaniesComponent
    ],
    imports: [
      material
    ],
    exports: [
        MenuComponent,
        SidebarComponent
    ],
    providers: [],
    bootstrap: []
  })
  export class MenuModule { }