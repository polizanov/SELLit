import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { HomeAccessGuard } from './guards/home-access.guard';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule
  ], 
  providers: [
    AuthorizationGuard,
    HomeAccessGuard
  ],
  exports: [
    PageNotFoundComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
