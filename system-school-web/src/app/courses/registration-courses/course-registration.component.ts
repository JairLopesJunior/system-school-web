import { Component, OnInit } from "@angular/core";
import { Course } from "../../site/models/course";
import { CourseService } from '../../site/services/course.service';
import { CourseListComponent } from "../course-list.component";

@Component({
    selector: 'app-course-registration',
    templateUrl: './course-registration.component.html'
})
export class CourseRegistrationComponent implements OnInit{

    course: Course = new Course();

    constructor(private courseService: CourseService,
                private courseListComponent: CourseListComponent){}

    ngOnInit(): void {
    }

    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => {
                this.course = new Course();
                alert("Salvo com sucesso.");
                this.courseListComponent.retrieveAll();
            },
            error: err => console.log('Error: ', JSON.stringify(err.error.error))
        });
    }
}