import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseRegistrationComponent } from './registration-courses/course-registration.component';
import { CourseEditComponent } from './edit-courses/course-edit.component';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseEditComponent,
        CourseRegistrationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'course/edit/:id', component: CourseEditComponent
            }
        ])
    ]
})
export class CourseModule {

}