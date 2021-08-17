import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';
import { StudentRegistrationComponent } from './registration-students/student-registration.component';
import { StudentEditComponent } from './edit-students/student-edit.component';

@NgModule({
    declarations: [
        StudentListComponent,
        StudentEditComponent,
        StudentRegistrationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'students', component: StudentListComponent
            },
            {
                path: 'student/edit/:id', component: StudentEditComponent
            }
        ])
    ]
})
export class StudentModule {

}