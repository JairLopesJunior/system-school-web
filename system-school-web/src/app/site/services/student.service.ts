import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    private studentUrl: string = 'http://localhost:3333/students';

    constructor(private httpClient: HttpClient){}
    
    retriveAll(): Observable<Student[]> {
        return this.httpClient.get<Student[]>(this.studentUrl);
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.studentUrl}/${id}`);
    }

    save(student: Student): Observable<Student> {
        if(student.id){
            return this.httpClient.put<Student>(`${this.studentUrl}/${student.id}`, student);
        } else {
            return this.httpClient.post<Student>(`${this.studentUrl}`, student);
        }
    }

    retrieveById(id: number): Observable<Student> {
        return this.httpClient.get<Student>(`${this.studentUrl}/${id}`);
    }

}