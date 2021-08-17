import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { Register } from '../models/register';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    private registerUrl: string = 'http://localhost:3333/registrations';

    constructor(private httpClient: HttpClient){}

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.registerUrl}/${id}`);
    }

    save(register: Register): Observable<Register> {
        return this.httpClient.post<Register>(`${this.registerUrl}`, register);
    }

}