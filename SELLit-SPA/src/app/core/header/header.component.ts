import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/authorization/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public authService: AuthorizationService,
    private router: Router,
  ) { }

  isLogged(): boolean {
    return !!this.authService.token
  }

  logout(): void {
    this.authService.removeToken();
    this.router.navigate(["/"]);
  }

}
