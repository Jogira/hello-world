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
    // template: `
    //     <button class="btn btn-primary" [class.active]="isActive">Save</button>
    // `    
    // template: `
    // <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    // `
    template: `
    <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Save</button>
    </div>
    `
})

@Injectable()
export class CoursesComponent {

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

    onDivClicked() {
        console.log("Div was clicked.")
    }

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }
}