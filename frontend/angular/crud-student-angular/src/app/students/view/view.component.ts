import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { StudentsService } from '../../services/students.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  // studentDetails!: Student;
  // studentId!: Number;

  // constructor(private studentService: StudentsService,
  //  private router: ActivatedRoute){

  //   parseInt(this.router.snapshot.paramMap.get("id") || '');

  //   this.studentService.getStudentById(this.studentId).subscribe((data: Student) => {
  //     this.studentDetails = data;
  //   } ) 
  // }

}
