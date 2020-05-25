import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  

  constructor(private http: HttpClient,private cookieService : CookieService) { }

  getallpost( ) {
      
   
    const header = new HttpHeaders({
      'Token': this.cookieService.get('token'),
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': ' http://localhost:4200/home',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': ' POST, GET, OPTIONS, DELETE',
      'Access-Control-Max-Age': ' 3600',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me, Authorization, access-control-max-age'
  });
   
    return this.http.get('http://localhost:8080/fibradosAPI//api/v1/forum', 
      {
        headers: header, 
        observe: 'response'
      });
  }
}
