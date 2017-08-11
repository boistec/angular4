import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {

  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';  

  constructor(private http: Http) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = response.json();
    });    
  }

  createPost(input: HTMLInputElement) {
    let post =  {title: input.value};
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      });
  }

  updatePost(post) {
    //USE PATH WHEN YOU DON'T HAVE TO UPDATE THE COMPLETED METHOD
    //this.http.patch(this.url, JSON.stringify(post))
    
    this.http.patch(this.url+'/'+post.id, JSON.stringify({ isRead:true}))
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.http.delete(this.url+ '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      });
  }


  ngOnInit() {
  }

}
