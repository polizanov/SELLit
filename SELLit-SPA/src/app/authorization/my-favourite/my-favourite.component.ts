import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/posts/service/post.service';
import { IMyFavourite } from 'src/app/shared/interfaces/profile/IMyFavourite';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.component.html',
  styleUrls: ['./my-favourite.component.css']
})
export class MyFavouriteComponent {

  posts: IMyFavourite | null = null;

  constructor(
    private postService: PostService,
  ) { 
    this.postService.loadMyFavourite().subscribe(posts => {this.posts = posts; console.log(posts)})
  }

  ngOnInit(): void {
  }

}
