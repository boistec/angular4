import { BadInput } from './../common/bad-input';
import { NotFundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
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

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          this.posts.splice(0, 0, post); 
          console.log(newPost.id);         
        }, (error: AppError) => {
          if (error instanceof BadInput ) {
            //use this form with when you have a form and want
            //to show the error in the form.
           //this.form.setErrors(error.json()); 
           alert('It wasn\'t possible to create the row');
          } else {
            throw error; //Re throw it to be make it available for the custom AppErrorHandler
          }          
      });
  }

  updatePost(post) {
    //USE PATH WHEN YOU DON'T HAVE TO UPDATE THE COMPLETED METHOD
    //this.http.patch(this.url, JSON.stringify(post))      
      this.service.update(post) 
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    this.service.delete(-600)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        }, (error: AppError) => {          
          if (error instanceof NotFundError) {            
            alert('This post has already been deleted.');
          } else {
            throw error //Rethrow it to be make it available for the custom AppErrorHandler
          }          
      });
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe( posts => this.posts = posts); 
  }
}
