import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth/auth.guard';
import { AccountSettingsComponent } from './main/header/account-settings/account-settings.component';
import { OverviewComponent } from './main/content/overview/overview.component';
import { LivetrackerComponent } from './main/content/livetracker/livetracker.component';
import { AddjourneyComponent } from './main/content/addjourney/addjourney.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path: 'main', component: MainComponent, /*canActivate: [AuthGuard],*/ children: [
      { path: '', redirectTo: '/main/livetracker', pathMatch: 'full' },
      { path: 'addjourney', component: AddjourneyComponent, data: {animation: "addjourney"} },
      { path: 'livetracker', component: LivetrackerComponent, data: {animation: "livetracker"} },
      { path: 'overview', component: OverviewComponent, data: {animation: "overview"} }
    ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
