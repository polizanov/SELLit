import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorizationGuard } from './guards/authorization.guard';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ], 
  providers: [
    AuthorizationGuard
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class SharedModule { }
