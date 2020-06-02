import { Component, OnInit, Injector} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public token :boolean = false  ;
  private _cookieService: CookieService;

  constructor(injector: Injector,private cookieService : CookieService) { 
    this._initServices(injector);
  }
  
  private _initServices(injector: Injector) {
    this._cookieService = injector.get(CookieService);
  }

  ngOnInit(): void {
     let token:String = this._cookieService.get('token');
    if(token == "") {
     this.token=false;
   }
    else     {
    this.token = true ;
  }
  }

  onLogoutClick() {
    this._cookieService.delete('token');
    this._cookieService.delete('name');
    this.token=false;
   
  }

}
