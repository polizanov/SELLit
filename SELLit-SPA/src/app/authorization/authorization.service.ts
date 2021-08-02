import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  public setToken(token: string) : void {
    localStorage.setItem("sessionToken", `${token}`)
  }

  get token(): any {
    return localStorage.getItem("sessionToken");
  }

  public removeToken(): void {
    sessionStorage.clear();
  }
}
