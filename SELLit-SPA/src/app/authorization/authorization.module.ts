import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './authorization-routing.module';
import { RouterModule } from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from '../shared/notification/notification.component';
import { MyFavouriteComponent } from './my-favourite/my-favourite.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MyFavouriteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthorizationService,
    NotificationComponent
  ]
})
export class AuthorizationModule { }
