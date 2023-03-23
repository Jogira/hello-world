import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms'

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  })


  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];

  constructor() { }

  addTopic(topic: HTMLInputElement) {
    // (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  submit(course: any) {
    console.log(course);
  }

  ngOnInit() {
  }

}
