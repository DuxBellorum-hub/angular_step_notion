import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
  }

  logout() : void{
    this.tokenService.clearToken();
  }

}
