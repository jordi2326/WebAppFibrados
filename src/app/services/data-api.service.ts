import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private post  

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
      observe: 'response',

    });
  }

  getapost( threadId:any) {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    });
   
  return this.http.get('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/forum/'+threadId+'/posts' /*'http://localhost:8080/api/v1/forum'*/,
    {
      headers: header, 
      observe: 'response',

    });
  }

  postposts( threadId:number , message:any , title:any) {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    });
    return this.http.post('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/forum/'+threadId
    ,
      JSON.stringify({
        message: message , title:"casa",  idUser :44,
   }),
  
    {
      headers: header, 
      observe: 'response',

    });
  }
  
  getuserid(id:number){
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

      return this.http.get('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/user/'+id,
    {
      headers: header, 
      observe: 'response',

    });

  }

  postmessage(id:number,){
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

      return this.http.post('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/user/'+id,
    {
      headers: header, 
      observe: 'response',

    });

  }
  posttopic(message:String , sport:String , title:String , type:String ) {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });
      return this.http.post('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/forum',
      JSON.stringify({
        idUser : 44,    message:"aaaa",    sport:"aaaa",    title:"Casa",type:"aaaaaa"
   }),
  
    {
      headers: header, 
      observe: 'response',

    });
  }
}
