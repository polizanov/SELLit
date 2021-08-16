import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

import {IProfile} from "../../shared/interfaces/profile/IProfile"
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: IProfile | null = null

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private authSevice: AuthorizationService,
  ) {
    let id = this.activateRoute.snapshot.params.profileId;
    this.userService.loadProfileById(id).subscribe(user =>  this.user = user)
  }

  id(): string {
    return this.authSevice.id
  }

  isAuthor(): boolean {
    if(!this.user) { return false }
    return this.id() == this.user.profileInfo._id
  }


}
