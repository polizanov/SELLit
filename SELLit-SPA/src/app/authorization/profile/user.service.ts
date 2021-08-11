import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IProfile } from "../../shared/interfaces/profile/IProfile"
import { environment } from "../../../environments/environment"
import { Observable } from 'rxjs';
import { AuthorizationService } from '../authorization.service';
const { apiURL } = environment

@Injectable()
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthorizationService,
  ) { }

  token(): string {
    return this.authService.token
  }

  loadProfileById(profileId: string): Observable<IProfile> {
    return this.httpClient.get<IProfile>(`${apiURL}/profile/${profileId}`, {
      headers: {
        sessionToken: this.token()
      }
    })
  }
}
