import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../chuck/modelos/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

   }

   register(name: any, password: any, email: any, privacidad: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': ' http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': ' POST, GET, OPTIONS, DELETE',
      'Access-Control-Max-Age': ' 3600',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me, Authorization, access-control-max-age'
  });
    return this.http.post('http://localhost:8080/fibradosAPI/api/v1/user', 
    JSON.stringify({email:email,
      isPrivate:privacidad,
      password:password,
      username:name}),
    { headers:header,          observe: 'response'  })
  }
  getUserDetails(email,password){
    return this.http.post('/api/auth.php',{
      email,
      password
    })
  }
  getRegisterDetails(email,password,name){
    return this.http.post('/api/auth.php',{
      email,
      password,
      name
    })
  }
  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }

  
  
    login( email:string,password:string) {
      
      let user:Usuario={username: email, password: password};
      console.log(user);
      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': ' http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': ' POST, GET, OPTIONS, DELETE',
        'Access-Control-Max-Age': ' 3600',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me, Authorization, access-control-max-age'
    });
     
      return this.http.post('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/login', 
        JSON.stringify({
          username: email,
          password: password
        }),
        {
          headers: header, 
          observe: 'response'
        });
    }
     

    //this.cookieService.set('token','our cookie value');//our cookie value podremos el valor del token que nos devuelve el header

   



  

}
