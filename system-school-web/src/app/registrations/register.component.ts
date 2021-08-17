import { Component, OnInit } from "@angular/core";
import { Course } from "../site/models/course";
import { Register } from "../site/models/register";
import { Student } from "../site/models/student";
import { CourseService } from "../site/services/course.service";
import { RegisterService } from "../site/services/register.service";
import { StudentService } from "../site/services/student.service";

@Component({
    templateUrl: './register.component.html'
})
export class RegistrationComponent implements OnInit{

    register: Register = new Register();

    courseList: Course[] = [];

    _courses: Course[] = [];

    studentList: Student[] = [];

    _students: Student[] = [];

    course: Course = new Course();

    studentCode: number = 0;

    constructor( private courseService: CourseService,
        private studentService: StudentService,
        private registerService: RegisterService) {}

    ngOnInit(): void {
        this.retrieveAll();
        this.retrieveAllStudents();
    }

    retrieveAll(): void{
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.courseList = this._courses;
            },
            error: err => console.log('Error', JSON.stringify(err.error.error))
        })
    }

    retrieveAllStudents(): void{
        this.studentService.retriveAll().subscribe({
            next: students => {
                this._students = students;
                this.studentList = this._students;
            },
            error: err => console.log('Error', JSON.stringify(err.error.error))
        })
    }

    deleteById(): void {
        this.registerService.deleteById(this.studentCode).subscribe({
            next: registers => {
                alert("Deletado com sucesso.");
            },
            error: err => alert('Error: ' + JSON.stringify(err.error.error))
        })
    }

    save(): void {
        this.registerService.save(this.register).subscribe({
            next: registers => {
                alert("Salvo com sucesso.");
            },
            error: err => alert('Error: ' + JSON.stringify(err.error.error))
        })
    }
}