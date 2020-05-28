import { Component, OnInit, Injector} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  private _cookieService: CookieService;

  constructor(injector: Injector) { 
    this._initServices(injector);
  }

  private _initServices(injector: Injector) {
    this._cookieService = injector.get(CookieService);
  }

  ngOnInit(): void {
  }

  onLogoutClick() {
    this._cookieService.delete('token');
    this._cookieService.delete('name')
  }

}
