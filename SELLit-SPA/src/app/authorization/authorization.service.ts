import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/auth/IUser';
import { IUserRegister } from "../shared/interfaces/auth/IUserRegister"
import { IUserLogin } from "../shared/interfaces/auth/IUserLogin"
import { environment } from "../../environments/environment"
import { tap } from 'rxjs/operators';
import { IUserEdit } from '../shared/interfaces/auth/IUserEdit';


const { apiURL } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public setToken(name: string, token: string): void {
    localStorage.setItem(`${name}`, `${token}`)
  }

  get token(): any {
    return localStorage.getItem("sessionToken");
  }

  get username(): any {
    return localStorage.getItem("username");
  }

  get id(): any {
    return localStorage.getItem("_id");
  }

  register(data: IUserRegister) {
    return this.httpClient.post<IUser>(`${apiURL}/auth/register`, data).pipe(
      tap((user: IUser) => {
        this.setToken("sessionToken", user.sessionToken);
        this.setToken("username", user.username);
        this.setToken("_id", user.objectId);
      })
    )
  }

  login(data: IUserLogin) {
    return this.httpClient.post<any>(`${apiURL}/auth/login`, data).pipe(
      tap((user: IUser) => {
        this.setToken("sessionToken", user.sessionToken);
        this.setToken("username", user.username);
        this.setToken("_id", user.objectId);
      })
    )
  }

  editProfile(data: IUserEdit) {
    return this.httpClient.post<IUser>(`${apiURL}/auth/edit-profile`, data, {
      headers: {
        "sessionToken": this.token
      }
    }).pipe(
      tap((user: IUser) => {
        this.setToken("sessionToken", user.sessionToken);
        this.setToken("username", user.username);
        this.setToken("_id", user.objectId);
      })
    )
  }

  logout() {
    return this.httpClient.get(`${apiURL}/auth/logout`, {
      headers: {
        "sessionToken": this.token
      }
    })
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }
}
