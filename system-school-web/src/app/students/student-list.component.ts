import { Component, OnInit } from "@angular/core";
import { StudentService } from '../site/services/student.service';
import  { Student } from "../site/models/student";

@Component({
    templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit{

    filteredStudents: Student[] = [];

    _students: Student[] = [];

    _filterBy: string = "";

    constructor(private studentService: StudentService){}

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void{
        this.studentService.retriveAll().subscribe({
            next: students => {
                this._students = students;
                this.filteredStudents = this._students;
            },
            error: err => alert('Error' + JSON.stringify(err.error.error))
        })
    }

    deleteById(id: number): void {
        this.studentService.deleteById(id).subscribe({
            next: students => {
                alert("Deletado com sucesso.");
                this.retrieveAll();
            },
            error: err => alert('Error' + JSON.stringify(err.error.error))
        })
    }

    save(student: Student): void {
        this.studentService.save(student).subscribe({
            next: students => {
                alert("Salvo com sucesso.");
                this.retrieveAll();
            },
            error: err => alert('Error' + JSON.stringify(err.error.error))
        })
    }
}