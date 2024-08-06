import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  private subscription : Subscription | undefined;
 
  constructor(private studentsService: StudentsService,
    private router: Router,
    private snackBar: MatSnackBar){

  }


  newStudent: Student = {
    id: undefined,
    name: "",
    email: ""
 
  }

  saveStudent(){
    
    this.subscription = this.studentsService.createStudent(this.newStudent).subscribe(data => {
    
     // alert("Student successfully saved");
     this.showSuccessMessage("Student successfully saved"); 
      this.router.navigate(['students']);

    })
  }

  showSuccessMessage(message: string){
    this.snackBar.open(message, 'Close',{
      duration: 3000
    })
}

  ngDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
