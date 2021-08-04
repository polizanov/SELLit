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

  username(): string { 
    return this.authService.username
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(["/"]);
        this.authService.clearLocalStorage();
      }, 
      error: () => {
        this.router.navigate(["/"]);
        this.authService.clearLocalStorage();
      }
      
    })
  }

}
