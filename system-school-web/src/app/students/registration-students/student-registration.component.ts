import { Component, OnInit } from "@angular/core";
import { Student } from "../../site/models/student";
import { StudentService } from '../../site/services/student.service';
import { StudentListComponent } from "../student-list.component";

@Component({
    selector: 'app-student-registration',
    templateUrl: './student-registration.component.html'
})
export class StudentRegistrationComponent implements OnInit{

    student: Student = new Student();

    constructor(private studentService: StudentService,
                private studentListComponent: StudentListComponent){}

    ngOnInit(): void {
    }

    save(): void{
        this.studentService.save(this.student).subscribe({
            next: course => {
                this.student = new Student();
                alert("Salvo com sucesso.");
                this.studentListComponent.retrieveAll();
            },
            error: err => console.log('Error', JSON.stringify(err.error.error))
        });
    }
}