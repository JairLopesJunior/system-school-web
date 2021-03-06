import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import  { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentModule } from './students/student.module';
import { RegisterModule } from './registrations/register.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CourseModule,
    StudentModule,
    RegisterModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
