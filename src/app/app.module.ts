import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { OverviewComponent } from './content/overview/overview.component';
import { AddjourneyComponent } from './content/addjourney/addjourney.component';
import { LivetrackerComponent } from './content/livetracker/livetracker.component';
import { BackgroundComponent } from './content/background/background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';

import { 
  MatToolbarModule, 
  MatSidenavModule 
} from '@angular/material';

const material = [
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavComponent,
    OverviewComponent,
    AddjourneyComponent,
    LivetrackerComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    material,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
