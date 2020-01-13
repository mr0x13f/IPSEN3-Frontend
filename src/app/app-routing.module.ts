import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './entry/login/login.component';
import { RegisterComponent } from './entry/register/register.component';
import { MainComponent } from './main/main.component';
import { AddjourneyComponent } from './main/content/addjourney/addjourney.component';
import { LivetrackerComponent } from './main/content/livetracker/livetracker.component';
import { OverviewComponent } from './main/content/overview/overview.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent, children: [
    { path: 'addjourney', component: AddjourneyComponent },
    { path: 'livetracker', component: LivetrackerComponent },
    { path: 'overview', component: OverviewComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
