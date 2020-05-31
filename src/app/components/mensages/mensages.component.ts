import { Component, OnInit,APP_ID } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router} from "@angular/router";
import { DataApiService } from '../../services/data-api.service';
import {CookieService} from 'ngx-cookie-service';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-mensages',
  templateUrl: './mensages.component.html',
  styleUrls: ['./mensages.component.css']
})
export class MensagesComponent implements OnInit {
  titulo = "casa";
  mensage;
  constructor(private route: ActivatedRoute , private Api:DataApiService , private cookieService : CookieService  ) {

   }


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Api.getapost(id).subscribe(resp => {
      console.log(resp.body)
       this.mensage=resp.body;
    },
    (error) => {
      console.error(error);
    }
  );
}
 

  addMensajes(event){
    event.preventDefault()
    const target = event.target
    const text =target.querySelector('#texto').value
    console.log(text)
    const id = this.route.snapshot.params['id'];
    this.Api.postposts(id,text,"aaa").subscribe(resp=>{
      console.log(resp.status)
    });

    

  }
}
