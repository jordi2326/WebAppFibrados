import { Component, OnInit, APP_ID } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Temas:any = []

  constructor(private Api:DataApiService , private cookieService : CookieService) { 
  }

  ngOnInit(): void {
    console.log( this.cookieService.get('token')              )

    this.Api.getallpost().subscribe(
      (data) => {
          this.Temas=data['results']
      },
      (error) => {
        console.error(error);
      }
    );
    console.log(this.Temas)


 
  }

}
