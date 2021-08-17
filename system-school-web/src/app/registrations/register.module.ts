import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './register.component';

@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'registrations', component: RegistrationComponent
            }
        ])
    ]
})
export class RegisterModule {

}