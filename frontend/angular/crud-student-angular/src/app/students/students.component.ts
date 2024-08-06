
import { Component } from '@angular/core';
import { Student } from '../models/student';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { StudentsService } from '../services/students.service';




@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  students: Student[] = [];

  constructor(private studentsService: StudentsService){
    this.studentsService.getStudents().subscribe((data:Student[]) => {
           this.students = data;

           this.dataSource = new MatTableDataSource(this.students);
    })
  }

  dataSource = new MatTableDataSource(this.students);
  displayedColumns= ["id", "name", "email", "actions"];


  selection = new SelectionModel(true, []);

  selectHandler(row: Student){
    this.selection.toggle(row as never);
  }

}
