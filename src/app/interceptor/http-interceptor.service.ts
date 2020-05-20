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
    let id: string | any= this._cookieService.get('id');
    let token: string | any= this._cookieService.get('token');
    let customHeaders: HttpHeaders = req.headers;
    if (id !== undefined) customHeaders = customHeaders.set('id', id);
    if (token !== undefined) customHeaders = customHeaders.set('token', token);
    const authReq = req.clone({
        headers: customHeaders
    });
    return next.handle(authReq);
  }
}