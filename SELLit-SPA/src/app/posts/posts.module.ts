import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { PostsRoutingModule } from './posts-routing.module';

import { SharedModule } from '../shared/shared.module';
import { GeneratePostService } from './service/generate-post.service';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AllComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    PostsRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [
    GeneratePostService,
  ]
})
export class PostsModule { }
