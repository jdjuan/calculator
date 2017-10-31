import { Observable } from 'rxjs/Observable';
import { PostService } from './post.service';
import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post$: Observable<string>;

  constructor(private postService: PostService) {
    this.post$ = postService.getPosts();
  }
}
