import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { OverviewComponent } from './content/overview/overview.component';
import { AddjourneyComponent } from './content/addjourney/addjourney.component';
import { LivetrackerComponent } from './content/livetracker/livetracker.component';
import { BackgroundComponent } from './background/background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';
import { HttpClientModule } from '@angular/common/http';

import { 
  MatToolbarModule, 
  MatSidenavModule 
} from '@angular/material';

import {
   MatNativeDateModule, 
   MatDatepickerModule, 
   MatFormFieldModule, 
   MatInputModule,
   MatButtonModule,
   MatCardModule
   } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { OverlayModule } from '@angular/cdk/overlay';



const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  OverlayModule
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavComponent,
    OverviewComponent,
    AddjourneyComponent,
    LivetrackerComponent,
    BackgroundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    material,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    material,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
