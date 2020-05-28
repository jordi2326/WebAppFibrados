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
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    });
   
  return this.http.get('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/forum' /*'http://localhost:8080/api/v1/forum'*/,
    {
      headers: header, 
    });
  }
}
