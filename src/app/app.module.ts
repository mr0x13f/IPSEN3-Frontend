import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from "@angular/common";
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatNativeDateModule, 
  MatDatepickerModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatExpansionModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './main/content/content.component';
import { NavComponent } from './main/nav/nav.component';
import { OverviewComponent } from './main/content/overview/overview.component';
import { AddjourneyComponent } from './main/content/addjourney/addjourney.component';
import { LivetrackerComponent } from './main/content/livetracker/livetracker.component';
import { BackgroundComponent } from './main/background/background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { OverviewItemComponent } from './main/content/overview/overview-item/overview-item.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './main/header/header.component';
import { Menu3Component } from './main/header/menu3/menu3.component';
import { AccountSettingsComponent } from './main/header/account-settings/account-settings.component';
import { ChangeNameComponent } from './main/header/account-settings/change-name/change-name.component';
import { ChangePasswordComponent } from './main/header/account-settings/change-password/change-password.component';
import { DeleteAccountComponent } from './main/header/account-settings/delete-account/delete-account.component';

const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  OverlayModule,
  MatIconModule,
  MatExpansionModule
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
    MainComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    Menu3Component,
    HeaderComponent,
    AccountSettingsComponent,
    ChangeNameComponent,
    ChangePasswordComponent,
    DeleteAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material,
    FormsModule,
    HttpClientModule,
    material,
    ReactiveFormsModule
  ],
  entryComponents: [DeleteAccountComponent, ChangeNameComponent, ChangePasswordComponent],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
