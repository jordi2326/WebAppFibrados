import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  users: any[] = [];
  objeto: any[] = [];
  private cookievalue: string;
  faltancampos = false;
  contrasenyaincorrecta=false
  constructor(private Auth: AuthService,
              private router: Router, 
              private cookieService: CookieService, 
              private api: HttpClient) {
  }

  ngOnInit(): void {
  }
  
  loginUser(event){
    this.faltancampos=false
    event.preventDefault()
    const target = event.target
    const email=target.querySelector('#email').value
    const password=target.querySelector('#password').value
    if (email == "" || password == "") this.faltancampos=true;
    if(this.faltancampos== false){
      this.Auth.login(email,password).subscribe(resp => {
        console.log(resp.headers)
        let casa = resp.headers.keys();
        let headers = casa.map(key =>
        console.log(key));
        if(resp.status==200) {
          console.log('status login response is 200');
          console.log('token is ', resp.body["token"]);
          this.cookieService.set('token',resp.body["token"]);//our cookie value podremos el valor del token que nos devuelve el header
          this.cookieService.set('name',resp.body["username"])
          this.cookieService.set('userId',resp.body["userId"])
          console.log( this.cookieService.get('token'))
          this.cookieService.set('auth',"1");
          this.router.navigate(['/home'])
        }
      }, error=>{
       this.contrasenyaincorrecta=true;
       console.log(error.status)
     });
    }
    } 
  }