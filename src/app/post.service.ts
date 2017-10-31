import { IPost } from './ipost.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';

@Injectable()
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<string> {
    return this.httpClient.get<IPost>(this.url)
      .map((post: IPost) => {
        return post.body;
      });
  }
}
