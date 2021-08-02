import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './authorization-routing.module';
import { RouterModule } from '@angular/router';
import { AuthorizationService } from './authorization.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthorizationService
  ]
})
export class AuthorizationModule { }
