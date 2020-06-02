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
    let auth:String = this.cookieService.get('auth');
    console.log(auth)

    this.Api.getallpost().subscribe(resp => {
        console.log(resp.body)
        this.Temas=resp.body;

       
      },
      (error) => {
        console.error(error);
      }
    );

  }

  filtro(event){
    event.preventDefault()
    const target = event.target
    const filtro=target.querySelector('#flitro').value
    const search=target.querySelector('#filtro2').value
    console.log(filtro,search)

    if(filtro=="Títul"){
      this.Api.flitrartitol(search).subscribe(resp => {
        console.log(resp.body)
        this.Temas=resp.body;

       
      },
      (error) => {
        console.error(error);
      }
    );

    }
    if(filtro=="Esport"){
      this.Api.flitrarsport(search).subscribe(resp => {
        console.log(resp.body)
        this.Temas=resp.body;

       
      },
      (error) => {
        console.error(error);
      }
    );

  }
  if(filtro=="Tipus"){
    this.Api.flitrartipe(search).subscribe(resp => {
      console.log(resp.body)
      this.Temas=resp.body;

     
    },
    (error) => {
      console.error(error);
    }
  );

  }
  if(filtro=="Tots els tòpics"){
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
}
