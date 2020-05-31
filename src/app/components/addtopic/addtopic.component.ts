import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {

  constructor(private Api:DataApiService , private cookieService : CookieService,private router: Router) { }

  ngOnInit(): void {
  }
  addTopic(event){
    event.preventDefault()
    const target = event.target
    const titulo =target.querySelector('#titulo').value
    const text =target.querySelector('#mensage').value
    const esport =target.querySelector('#esport').value
    this.Api.posttopic(text,esport,titulo,"duda").subscribe(resp => {
      console.log(resp.headers)

    
      if(resp.status==201) {
        console.log('status login response is 201');
        this.router.navigate(['/home'])
      }
    }, error=>{
     console.log('no fet el post')
     console.log(error.status)
   });
  } 
    

  }
    

