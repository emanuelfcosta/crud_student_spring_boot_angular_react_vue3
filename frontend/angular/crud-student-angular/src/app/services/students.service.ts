import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiUrl = "http://localhost:8090/students";

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.apiUrl);

  }
  getStudentById(id:Number):Observable<Student>{
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Student>(url);
  }
  
  createStudent(student: Student): Observable<Student>{
    return this.httpClient.post<Student>(this.apiUrl,student);

  }

  updateStudent(student:Student):Observable<Student> {
    const url = `${this.apiUrl}/${student.id}`;
    console.log('>>' + url);
    console.log('==' + student); 
    return this.httpClient.put<Student>(url,student);
    

  }

  deleteStudent(id: Number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
