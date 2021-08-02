import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPost } from "../../shared/interfaces/IPost"

@Injectable({
  providedIn: 'root'
})
export class GeneratePostService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadPost(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>('http://localhost:3000/all-products')
  }
}
