import { Component, OnInit, Injector} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   token=true  ;
   token1 =false  ; 
  private _cookieService: CookieService;

  constructor(injector: Injector) { 
    this._initServices(injector);
  }

  private _initServices(injector: Injector) {
    this._cookieService = injector.get(CookieService);
  }

  ngOnInit(): void {
    let token:String = this._cookieService.get('token');
   if( token != null || token != "") {
     this.token=false;
     this.token1=true;
   }
   else   {
    this.token = true ;
    this.token1 = false; 
  }
  console.log(this.token , this.token1)   
  }

  onLogoutClick() {
    this._cookieService.delete('token');
    this._cookieService.delete('name');
    this.token=true;
    this.token1=false;
   
  }

}
