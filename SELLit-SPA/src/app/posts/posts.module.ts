import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { PostsRoutingModule } from './posts-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PostService } from './service/post.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    AllComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
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
