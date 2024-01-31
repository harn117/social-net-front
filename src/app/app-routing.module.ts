import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/auth/login/login.component';
import { SingUpComponent } from './components/auth/sing-up/sing-up.component';
import { MainComponent } from './components/dash/main/main.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sing-up', component: SingUpComponent},
  { path: 'dash-board-main', component: MainComponent},
  { path: 'dash-board',canActivate: [AuthGuard], component: MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
