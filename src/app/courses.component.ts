import { Component, Injectable } from "@angular/core"
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    // template: `
    // <h2>{{ title }}</h2>
    // <ul>
    //     <li *ngFor="let course of courses">
    //         {{course}}
    //     </li>
    // </ul>
    // `
    template: `
    <img [src]="imageUrl" />
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    `
})

@Injectable()
export class CoursesComponent {
    title = "List of courses.";
    imageUrl = "https://baconmockup.com/640/360"
    colSpan = 2;
    courses;

    getTitle() {
        return this.title;
    }

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }
}