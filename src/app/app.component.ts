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
  canSave = true;



  loadCoursesArray: any;


  coursesObj =
    [
      { id: 1, name: 'courses1' },
      { id: 2, name: 'courses2' },
      { id: 3, name: 'courses3' }
    ];



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

  onAdd() {
    this.coursesObj.push({ id: 4, name: 'course4' });
  }

  onChange(course: any) {
    // let index = this.coursesObj.indexOf(course);
    // this.coursesObj.splice(index, 1);
    course.name = 'UPDATED';
  }

  loadCourses() {
    this.loadCoursesArray = [
      { id: 1, name: 'courses1' },
      { id: 2, name: 'courses2' },
      { id: 3, name: 'courses3' }
    ];
  }

  trackCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }

  onClick() {

  }
}


