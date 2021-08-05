import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { PostsRoutingModule } from './posts-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PostService } from './service/post.service';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    PostsRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
  providers: [
    PostService,
  ]
})
export class PostsModule { }
