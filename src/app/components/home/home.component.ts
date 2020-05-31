import { Component, OnInit, APP_ID } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import {CookieService} from 'ngx-cookie-service';
import { Router} from "@angular/router";
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Temas;
  Usuario

  constructor(private Api:DataApiService , private cookieService : CookieService) { 
  }

  ngOnInit(): void {
    this.Api.getallpost().subscribe(resp => {
        console.log(resp.body)
        this.Temas=resp.body;
         this.Temas.map(key =>{
           this.Api.getuserid(key["userId"]).subscribe(respuesta =>{
             this.Usuario=respuesta.body
              key["userId"]=respuesta["username"]
           })

         } );
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
