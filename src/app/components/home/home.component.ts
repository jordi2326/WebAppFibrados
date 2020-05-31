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
  id:number

  constructor(private Api:DataApiService , private cookieService : CookieService) { 
  }

  ngOnInit(): void {
    this.Api.getallpost().subscribe(resp => {
        console.log(resp.body)
        this.Temas=resp.body;

       
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
