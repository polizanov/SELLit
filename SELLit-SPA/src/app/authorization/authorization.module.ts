import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './authorization-routing.module';
import { AuthorizationService } from './authorization.service';
import {  ReactiveFormsModule } from '@angular/forms';
import { MyFavouriteComponent } from './my-favourite/my-favourite.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserService } from './profile/user.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MyFavouriteComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthorizationService,
    UserService,
  ]
})
export class AuthorizationModule { }
