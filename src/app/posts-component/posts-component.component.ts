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
    this.posts.splice(0, 0, post); //deleting in advance the element for sumulated improved performance. optimistic aproach

    input.value = '';

    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          console.log(response.json());
        }, (error: AppError) => {
          this.posts.splice(0, 1); //Hence we added the optimistic aproach we have to make sure to undo the change on error          
          
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
        response => {
          console.log(response.json());
        });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post); //Hence we added the optimistic aproach we have to make sure to undo the change on error          
    this.posts.splice(index, 1); 

    this.service.delete(post.id)
      .subscribe(
        null, 
        (error: AppError) => {
          this.posts.splice(index, 0, post); //Hence we added the optimistic aproach we have to make sure to undo the change on error          

          if (error instanceof NotFundError) {            
            alert('This post has already been deleted.');
          } else {
            throw error //Re throw it to be make it available for the custom AppErrorHandler
          }          
      });
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe( posts => this.posts = posts); 
  }
}
