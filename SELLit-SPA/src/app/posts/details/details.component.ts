import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/authorization/authorization.service';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  post: IPost | null = null;

  constructor(
    private postService: PostService,
    private authService: AuthorizationService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    let id = this.activateRoute.snapshot.params.productId;
    this.postService.loadPostById(id).subscribe(post => this.post = post)
  }

  
  get id(): any {
    return this.authService.id
  }

  deletePost(id: string) {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.router.navigate(['/details', id])
      }
    })
  }

  addToFavourite(id: string) {
    this.postService.likePost(id).subscribe({
      next: () => {
        this.router.navigate(['/my-favourite']);
      },
      error: () => {
        this.router.navigate(['/details', id])
      }

    })
  }

}
