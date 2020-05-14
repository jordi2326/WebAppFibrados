import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {  }
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

  login(data: any): Observable<any> {
     var body = new HttpParams().set(data.username, data.password);

    return this.http.post<any>('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/login', body.toString , { headers: new HttpHeaders()
    .set('Content-Type','application/x-www-form-urlencoded')});
}
    //this.cookieService.set('token','our cookie value');//our cookie value podremos el valor del token que nos devuelve el header

   



  

}
