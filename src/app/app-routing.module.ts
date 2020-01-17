import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth/auth.guard';
import { AddjourneyComponent } from './main/content/addjourney/addjourney.component';
import { LivetrackerComponent } from './main/content/livetracker/livetracker.component';
import { OverviewComponent } from './main/content/overview/overview.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
      { path: 'addjourney', component: AddjourneyComponent },
      { path: 'livetracker', component: LivetrackerComponent },
      { path: 'overview', component: OverviewComponent }
    ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
