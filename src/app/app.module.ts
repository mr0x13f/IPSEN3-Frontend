import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './main/menu/menu.component';
import { SidebarComponent } from './main/menu/sidebar/sidebar.component';
import { ContentComponent } from './main/content/content.component';
import { NavComponent } from './main/nav/nav.component';
import { OverviewComponent } from './main/content/overview/overview.component';
import { AddjourneyComponent } from './main/content/addjourney/addjourney.component';
import { LivetrackerComponent } from './main/content/livetracker/livetracker.component';
import { BackgroundComponent } from './main/background/background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './main/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from "@angular/common";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { OverviewItemComponent } from './main/content/overview/overview-item/overview-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopupComponent } from './test/popup/popup.component';
import { AuthComponent } from './auth/auth.component';
import {
  MatToolbarModule,
MatSidenavModule,
  MatNativeDateModule, 
  MatDatepickerModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

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
    TestComponent,
    PopupComponent,
    OverviewItemComponent,
    MainComponent,
    AuthComponent,
    LoadingSpinnerComponent
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
  entryComponents: [],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
