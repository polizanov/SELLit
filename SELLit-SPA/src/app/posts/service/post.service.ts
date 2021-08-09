import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPost } from "../../shared/interfaces/IPost"
import { environment } from "../../../environments/environment"
import { IResponce } from 'src/app/shared/interfaces/IRestRespoce';
import { IMyFavourite } from 'src/app/shared/interfaces/profile/IMyFavourite';
const { apiURL } = environment;


@Injectable()
export class PostService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  get token(): any {
    return localStorage.getItem("sessionToken")
  }

  loadPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${apiURL}/all-products`)
  }

  loadPostById(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${apiURL}/details/${id}`)
  }

  loadMyFavourite(): Observable<IMyFavourite> {
    return this.httpClient.get<IMyFavourite>(`${apiURL}/my-favourite-posts`, {
      headers: {
        "sessionToken": this.token
      }
    })
  }

  sentPost(data: IPost) {
    return this.httpClient.post<IResponce>(`${apiURL}/create-product`, data, {
      headers: {
        "sessionToken": this.token
      }
    })
  }

  editPost(data: IPost, id: string) {
    return this.httpClient.put<IResponce>(`${apiURL}/edit-product/${id}`, data, {
      headers: {
        "sessionToken": this.token
      }
    })
  }

  deletePost(id: string) {
    return this.httpClient.delete<IResponce>(`${apiURL}/delete-product/${id}`, {
      headers: {
        "sessionToken": this.token
      }
    })
  }


}
