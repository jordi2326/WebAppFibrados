import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private _cookieService: CookieService;

    constructor(protected injector: Injector) {
      this._init(injector);
    }

  private _init(injector: Injector): void {
    this._cookieService = injector.get(CookieService);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this._cookieService.get('token');
    console.log('token: ', token);
    if (!token) {
      console.log('handle next req');
      return next.handle(req);
     
    }
    const req1 = req.clone({
      headers: req.headers.set('Authorization', `${token}`),
    });
    return next.handle(req1);
  }
}