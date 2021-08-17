import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../../site/models/course";
import { CourseService } from "../../site/services/course.service";

@Component({
    templateUrl: './course-edit.component.html'
})
export class CourseEditComponent implements OnInit{

    course: Course = new Course();

    constructor( private activatedRoute: ActivatedRoute,
                 private courseService: CourseService){}

    ngOnInit(): void {
        this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
            next: course => this.course = course,
            error: err => alert('Error: ' + JSON.stringify(err.error.error))
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: success => alert("Alterado com sucesso."),
            error: err => alert('Error: ' + JSON.stringify(err.error.error))
        })
    }

}