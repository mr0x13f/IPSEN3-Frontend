import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './main/content/content.component';
import { NavComponent } from './main/nav/nav.component';
import { OverviewComponent } from './main/content/overview/overview.component';
import { AddjourneyComponent } from './main/content/addjourney/addjourney.component';
import { LivetrackerComponent } from './main/content/livetracker/livetracker.component';
import { BackgroundComponent } from './main/background/background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryComponent } from './entry/entry.component';
import { LoginComponent } from './entry/login/login.component';
import { RegisterComponent } from './entry/register/register.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './main/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';

import { OverviewItemComponent } from './main/content/overview/overview-item/overview-item.component';

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



const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule
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
    OverviewItemComponent,
    EntryComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
