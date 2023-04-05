import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {
  posts: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<any>('http://localhost:3000/posts').subscribe({
      next: (res) => {
        this.posts = res;
      },
      error: (err) => console.log(err),
    });
  }
}
