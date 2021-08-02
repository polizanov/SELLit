import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService } from 'src/app/authorization/authorization.service';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { GeneratePostService } from '../service/generate-post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  post: IPost | null = null

  constructor(
    private generatePosts: GeneratePostService,
    private authService: AuthorizationService,
    private activateRoute: ActivatedRoute,
  ) { 
    let id = this.activateRoute.snapshot.params.productId;
    this.generatePosts.loadPostById(id).subscribe(post => this.post = post)
  }

}
