import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ITokenUser } from '../_interfaces/user';
 


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string): void {
    console.log(token, 'from service')
    localStorage.setItem('token', token)
    this.router.navigate(['admin'])
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  clearToken() : void{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  clearTokenExpired() : void{
    localStorage.removeItem('token');
    this.router.navigate(['auth']);
  }

  getToken() : string | null{
    return localStorage.getItem("token")
  }

  getPayload(){
    let user: ITokenUser = {
      id: 0,
      nom: '',
      prenom: '',
      email: ''
    }

    let token = localStorage.getItem('token')
    if(token != null){
      const decode: ITokenUser |any = null //jwtDecode<ITokenUser>(token)
      user.id = decode.id
      user.nom = decode.nom
      user.prenom = decode.prenom
      user.email = decode.email
    }

    return user
    
  }

}
