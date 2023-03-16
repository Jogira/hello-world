import { Component, Injectable } from "@angular/core"
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
    {{text | summary: 10}}
    `
    // template: `
    // {{course.title | uppercase | lowercase}} <br/>
    // {{course.students | number}} <br/>
    // {{course.rating | number:'1.2-2'}} <br/>
    // {{course.price | currency}} <br/>
    // {{course.releaseDate | date:'shortDate'}} <br/>`
    // template: `
    // <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    // `
    // template: `
    //     <input #email (keyup.enter)="onKeyUp(email.value)" />
    // `
    // template: `
    // <h2>{{ title }}</h2>
    // <ul>
    //     <li *ngFor="let course of courses">
    //         {{course}}
    //     </li>
    // </ul>
    // `
    // template: `
    //     <button class="btn btn-primary" [class.active]="isActive">Save</button>
    // `    
    // template: `
    // <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    // `
    // template: `
    // <div (click)="onDivClicked()">
    //     <button (click)="onSave($event)">Save</button>
    // </div>
    // `
})

@Injectable()
export class CoursesComponent {
    text =
        `2 high severity vulnerabilities
    
    To address all issues, run:`

    course = {
        title: "Punpun",
        rating: 5.240,
        students: 3012,
        price: 5.05,
        releaseDate: new Date(2020, 3, 1)
    }

    email = "me@example.com";
    isActive = false;
    title = "List of courses.";
    imageUrl = "https://baconmockup.com/640/360"
    colSpan = 2;
    courses;

    getTitle() {
        return this.title;
    }

    onSave($event: any) {
        $event.StopPropagation();
        console.log("👻", event)
    }

    onKeyUp() {
        console.log(this.email);
    }

    onDivClicked() {
        console.log("Div was clicked.")
    }

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }
}