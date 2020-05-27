import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router} from "@angular/router";
import { VariablesglobalesService } from '../../../services/variablesglobales.service';
import {CookieService} from 'ngx-cookie-service';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { Login } from '../../../chuck/modelos/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any[] = [];
  objeto: any[] = [];

  constructor( private Auth : AuthService ,private router:Router, private cookieService : CookieService  , private api:HttpClient) { }
  private cookievalue:string;
  ngOnInit(): void {
    this.cookieService.delete('token');
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
     

    if(  email== "" ||  password=="") window.alert("introduzca usuario y contraseña correcta");

     this.Auth.login(email,password).subscribe(resp => {
      // display its headers
      console.log(resp.headers)
      let casa = resp.headers.keys();
      let headers = casa.map(key =>
       console.log(key));
     
      // display its headers

      if(resp.status==200) {
        console.log('status login response is 200');
        console.log('token is ', resp.body["token"]);
              this.cookieService.set('token',resp.body["token"]);//our cookie value podremos el valor del token que nos devuelve el header
              this.cookieService.set('name',resp.body["username"])
              console.log( this.cookieService.get('token')              )
           this.router.navigate(['/home'])

      }


     
     }, 
     error=>{
       console.log('usuari o contrasenya incorrecta')
       console.log(error.status)
     });

    
    } 



  }
      
 

