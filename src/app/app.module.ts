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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { OverviewItemComponent } from './main/content/overview/overview-item/overview-item.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './main/header/header.component';
import { MenuComponent } from './main/header/menu/menu.component';
import { AccountSettingsComponent } from './main/header/account-settings/account-settings.component';
import { ChangeNameComponent } from './main/header/account-settings/change-name/change-name.component';
import { ChangePasswordComponent } from './main/header/account-settings/change-password/change-password.component';
import { DeleteAccountComponent } from './main/header/account-settings/delete-account/delete-account.component';
import { JourneyConfirmSavedComponent } from './main/content/addjourney/journey-confirm-saved/journey-confirm-saved.component';

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
    OverviewItemComponent,
    MainComponent,
    AuthComponent,
    MenuComponent,
    HeaderComponent,
    AccountSettingsComponent,
    ChangeNameComponent,
    ChangePasswordComponent,
    DeleteAccountComponent,
    JourneyConfirmSavedComponent
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
  entryComponents: [DeleteAccountComponent, ChangeNameComponent, ChangePasswordComponent, JourneyConfirmSavedComponent],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
