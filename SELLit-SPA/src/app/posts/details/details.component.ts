import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService } from 'src/app/authorization/authorization.service';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  post: IPost | null = null

  constructor(
    private generatePosts: PostService,
    private authService: AuthorizationService,
    private activateRoute: ActivatedRoute,
  ) { 
    let id = this.activateRoute.snapshot.params.productId;
    this.generatePosts.loadPostById(id).subscribe(post => this.post = post)
  }

  get id(): any {
    return this.authService.id
  }

}
