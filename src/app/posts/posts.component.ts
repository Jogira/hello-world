import { throwError } from 'rxjs';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  /**
   *
   */
  constructor(private service: PostService) {

  }

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      response => {
        // console.log(response);
        this.posts = response;
      });
  }


  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';


    this.service.createPost(post).subscribe((
      response: any) => {
      post['id'] = response.id;
      this.posts.splice(0, 0, post);
      console.log("エＤは " + response.id);
    }, (error: AppError) => {
      if (error instanceof BadInput) {
        // this.form.setErrors(error.originalError);
      }
      else {
        throw error;
      }
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe(
      response => {
        console.log(response)
      });
    // this.http.put(this.url, JSON.stringify(post));

  }

  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        }
        else {
          throw error;
        }
        console.log(error);
      });
  }


}



