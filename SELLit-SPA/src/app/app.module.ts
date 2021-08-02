import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AuthorizationModule,
    PostsModule,
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
