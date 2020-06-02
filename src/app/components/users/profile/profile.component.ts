import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    User
    Post
    post:any[] = []
  constructor(private cookieService: CookieService ,  private Api:DataApiService) { }
   image = new Image();

  ngOnInit(): void {
    this.post=[]
    const id  = this.cookieService.get('userId')
    const userid   = Number(id)
    this.Api.getuserid(userid).subscribe(resp=>{
      console.log(resp.status)
      this.User=resp.body;
      this.image.src = 'data:image/png;base64,'+this.User.image;
      console.log(this.User)
      var myElement = document.getElementById("01");
      if(this.User.isPrivate){
        myElement.textContent = "Es privat : Si";
  
      }
      else {
        myElement.textContent = "Es privat : No";
  
      }

      this.Api.getallpost().subscribe(resp=>{
          this.Post=resp.body;
          for (let i = 0 ; i < this.Post.length ; ++i){
              console.log(this.Post[i].idUser)
              if(this.Post[i].idUser ==userid ){
                console.log("Hola")
              this.post.push(this.Post[i])
              }
          }
          console.log(this.post)
      });

    
    });

  }
  onLogoutClick() {
    this.cookieService.delete('token');
    this.cookieService.delete('name');
  }
  eliminar(id){
    console.log(id)
    this.Api.eliminar(id).subscribe(resp=>{
        console.log(resp.status,resp.headers)
        if(resp.ok){
          this.ngOnInit();

        }
    });
  }
}
