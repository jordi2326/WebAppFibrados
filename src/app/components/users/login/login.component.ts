import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router} from "@angular/router";
import { VariablesglobalesService } from '../../../services/variablesglobales.service';
import {CookieService} from 'ngx-cookie-service';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any[] = [];
  objeto: any[] = [];


  constructor(private Auth : AuthService , private router:Router, private cookieService : CookieService  , private api:HttpClient) { }
  private cookievalue:string;
  ngOnInit(): void {
    this.Auth.getUsers().subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
//this.cookievalue=this.cookieService.get('token')//nos devolvera el string del token

}
  
  loginUser(event){
    event.preventDefault()
    const target = event.target
    const email=target.querySelector('#email').value
    const password=target.querySelector('#password').value

    //this.Auth.getUserDetails(email, password).subscribe(data => {
     // if(data.success){
          //redirect
     // }
      //else{ 
       // window.alert(data.)
      //}
   // })
    if(  email== "" ||  password=="") window.alert("introduzca usuario y contraseña correcta")

    this.objeto = [{username:email , password:password}]
     this.Auth.login(this.objeto).subscribe(
       res=>{
         console.log(res);
       }
     );

    if(email == "jordi@gmail.com" &&  password=="12345") {
      window.alert("contraseña corrcta")
      this.router.navigate(['/home']);
    }
    else if(  email== "" ||  password=="") window.alert("introduzca usuario y contraseña correcta")
    console.log(email,password)

  }
      
 }

