
import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentmenuComponent } from './contentmenu/contentmenu.component';

import { 
    MatToolbarModule, 
    MatSidenavModule,
    MatIconModule
  } from '@angular/material';
  
  const material = [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ];  

@NgModule({
    declarations: [
      MenuComponent,
      SidebarComponent,
      ContentmenuComponent
    ],
    imports: [
      material
    ],
    exports: [
        MenuComponent,
        SidebarComponent,
        ContentmenuComponent
    ],
    providers: [],
    bootstrap: []
  })
  export class MenuModule { }