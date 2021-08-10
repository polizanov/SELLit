import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { HomeAccessGuard } from './guards/home-access.guard';




@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule
  ], 
  providers: [
    AuthorizationGuard,
    HomeAccessGuard,
  ],
  exports: [
    PageNotFoundComponent,
  ]
})
export class SharedModule { }
