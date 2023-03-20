import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
    
    `
  ]
})
export class AppComponent {
  viewMode = 'Something Else';



  courses = [23];

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 15
  }

  title = 'Angular hello-world';

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed.", eventArgs)
  }
}


