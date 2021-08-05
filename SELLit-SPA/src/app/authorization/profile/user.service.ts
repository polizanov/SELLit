import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IProfile } from "../../shared/interfaces/profile/IProfile"
import { environment } from "../../../environments/environment"
import { Observable } from 'rxjs';
const { apiURL } = environment

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  loadProfileById(id: string): Observable<IProfile> {
    return this.httpClient.get<IProfile>(`${apiURL}/profile/${id}`)
  }
}
