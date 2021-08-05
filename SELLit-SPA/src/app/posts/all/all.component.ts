import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../service/post.service';

import { IPost } from "../../shared/interfaces/IPost"
import { AuthorizationService } from 'src/app/authorization/authorization.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {

  posts: IPost[] | null = null;

  constructor(
    private generatePosts: PostService,
    private authService: AuthorizationService
  ) {
    this.generatePosts.loadPosts().subscribe(posts => this.posts = posts)
  }

  isLogged(): boolean {
    return !!this.authService.token
  }



}
