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
    this.service.getAll().subscribe(
      posts => this.posts = posts);
  }


  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';


    this.service.create(post).subscribe((
      newPost: any) => {
      post['id'] = newPost.id;
      console.log("エＤは " + newPost.id);
    }, (error: AppError) => {
      this.posts.splice(0, 1);

      if (error instanceof BadInput) {
        // this.form.setErrors(error.originalError);
      }
      else {
        throw error;
      }
    });
  }

  updatePost(post: any) {
    this.service.update(post).subscribe(
      updatedPost => {
        console.log(updatedPost)
      });
    // this.http.put(this.url, JSON.stringify(post));

  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(
      null,
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          this.posts.splice(index, 0, post);
          alert('This post has already been deleted.');
        }
        else {
          throw error;
        }
        console.log(error);
      });
  }
}



