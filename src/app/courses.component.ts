import { Component, Injectable } from "@angular/core"
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    `
})

@Injectable()
export class CoursesComponent {
    title = "List of courses.";
    courses;

    getTitle() {
        return this.title;
    }

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }
}