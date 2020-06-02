import { Injectable, Query } from '@angular/core';
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

  
  getinfoapost( threadId:any) {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    });
   
  return this.http.get('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/forum/'+threadId/*'http://localhost:8080/api/v1/forum'*/,
    {
      
      headers: header, 
      observe: 'response',

    });
  }

  flitrarsport(bus:string ) {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    });
    return this.http.get('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/forum/searchBySport'
    ,
  
  
    {
      params:{
        sport:bus
      },
      headers: header, 
      observe: 'response',

    });
  }

  flitrartitol(bus:string ) {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    });
    return this.http.get('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/forum/searchByTitle'
    ,
     {
      params:{
        title:bus
      },
      headers: header, 
      observe: 'response',

    });
  }


  flitrartipe  (bus:string ) {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    });
    return this.http.get('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/forum/searchByType'

    ,

  
    {

      params:{
        type:bus
      },
      headers: header, 
      observe: 'response',

    });
  }

  postposts( threadId:number , message:any , title:any, user:number) {
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
        message: message , title:"casa",  userId :user,
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
  posttopic(message:String , sport:String , title:String , type:String , userId:number ) {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    });

      return this.http.post('http://porygon.fib.upc.edu:8080/fibradosAPI/api/v1/forum',
      JSON.stringify({
        idUser : userId,    message:message,    sport:sport,    title:title ,type:type
   }),
  
    {
      headers: header, 
      observe: 'response',

    });
  }
}
