import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPost } from "../../shared/interfaces/IPost"
import { environment } from "../../../environments/environment"
const { apiURL } = environment;


@Injectable()
export class GeneratePostService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${apiURL}/all-products`)
  }

  loadPostById(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${apiURL}/details/${id}`)
  }
}
