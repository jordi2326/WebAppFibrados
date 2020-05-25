import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadosdeconversacionesComponent } from './components/admin/listadosdeconversaciones/listadosdeconversaciones.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';

import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { VariablesglobalesService } from './services/variablesglobales.service';
import { MensagesComponent } from './components/mensages/mensages.component';
import { AddtopicComponent } from './components/addtopic/addtopic.component';
import { Usuario } from './models/Usuario';
import { TokenInterceptor } from './interceptor/http-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    ListadosdeconversacionesComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    MensagesComponent,
    AddtopicComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    VariablesglobalesService,CookieService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
