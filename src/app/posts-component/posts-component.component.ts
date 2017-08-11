import { PostService } from './../services/postservice.service';
import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {

  posts: any[];  

  constructor(private service: PostService) {       
  }

  createPost(input: HTMLInputElement) {
    let post =  {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      });
  }

  updatePost(post) {
    //USE PATH WHEN YOU DON'T HAVE TO UPDATE THE COMPLETED METHOD
    //this.http.patch(this.url, JSON.stringify(post))      
      this.service.updatePost(post) 
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      });
  }

  ngOnInit() {
    this.service.getPost()
    .subscribe(response => {
      this.posts = response.json();
    }); 
  }

}
