import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneratePostService } from '../service/generate-post.service';

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
    private generatePosts: GeneratePostService,
    private authService: AuthorizationService
  ) {
    this.generatePosts.loadPosts().subscribe(posts => this.posts = posts)
  }

  isLogged(): boolean {
    return !!this.authService.token
  }



}
