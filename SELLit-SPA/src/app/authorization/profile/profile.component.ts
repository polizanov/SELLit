import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

import {IProfile} from "../../shared/interfaces/profile/IProfile"

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
  ) {
    let id = this.activateRoute.snapshot.params.profileId;
    this.userService.loadProfileById(id).subscribe(user => {console.log(user.products); this.user = user})
  }


}
