import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Student } from "../../site/models/student";
import { StudentService } from "../../site/services/student.service";

@Component({
    templateUrl: './student-edit.component.html'
})
export class StudentEditComponent implements OnInit{

    student: Student = new Student();

    constructor( private activatedRoute: ActivatedRoute,
                 private studentService: StudentService){}

    ngOnInit(): void {
        this.studentService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
            next: student => this.student = student,
            error: err => alert('Error' + JSON.stringify(err.error.error))
        });
    }   

    save(): void {
        this.studentService.save(this.student).subscribe({
            next: success => alert("Alterado com sucesso."),
            error: err => alert('Error: ' + JSON.stringify(err.error.error))
        })
    }

}