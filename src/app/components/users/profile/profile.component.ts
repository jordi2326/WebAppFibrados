import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
  }
  onLogoutClick() {
    this.cookieService.delete('token');
    this.cookieService.delete('name');
  }
}
