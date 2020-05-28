import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from 'src/app/components/users/login/login.component';
import { RegisterComponent } from 'src/app/components/users/register/register.component';
import { ProfileComponent } from 'src/app/components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { MensagesComponent } from './components/mensages/mensages.component';
import { AddtopicComponent} from './components/addtopic/addtopic.component';

const routes: Routes = [
  { path: 'user/login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'mensages/:id', component: MensagesComponent },
  {path:'addtopic',component:AddtopicComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
