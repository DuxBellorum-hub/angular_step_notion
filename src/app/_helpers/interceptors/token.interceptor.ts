import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { TokenService } from 'src/app/_services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService : TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("intercepted")
    const token = this.tokenService.getToken();
     console.log(token)
    
    if(token !== null){
      let clone = request.clone({
        headers : request.headers.set('Authorization', 'bearer '+token)
      })
      
      return next.handle(clone).pipe(
        catchError((error : any) => {
          console.log(error);
          if(error.status === 401) {
            this.tokenService.clearTokenExpired();
          }
          return throwError('Session Expired');
        })
      )
    }
    
    console.log("nouvelle requete")
    return next.handle(request);
  } 
}


export const TokenInterceptorProvider = {
  provide : HTTP_INTERCEPTORS, 
  useClass : TokenInterceptor, 
  multi : true
}