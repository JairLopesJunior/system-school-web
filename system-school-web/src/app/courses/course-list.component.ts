import { Component, OnInit } from "@angular/core";
import { CourseService } from '../site/services/course.service';
import  { Course } from "../site/models/course";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: string = "";

    constructor( private courseService: CourseService){}

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void{
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => alert('Error: ' + JSON.stringify(err.error.error))
        })
    }

    deleteById(id: number): void {
        this.courseService.deleteById(id).subscribe({
            next: courses => {
                alert("Deletado com sucesso.");
                this.retrieveAll();
            },
            error: err => alert('Error: ' + JSON.stringify(err.error.error))
        })
    }

    save(course: Course): void {
        this.courseService.save(course).subscribe({
            next: courses => {
                alert("Salvo com sucesso.");
                this.retrieveAll();
            },
            error: err => alert('Error: ' + JSON.stringify(err.error.error))
        })
    }
}