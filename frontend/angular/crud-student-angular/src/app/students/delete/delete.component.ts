import { StudentsService } from './../../services/students.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {

  studentId!: Number;

  private destroy$: Subject<void> = new Subject<void>();

  

  constructor(private router:ActivatedRoute,
    private route: Router,
    private matSnackBar: MatSnackBar,
    private studentsService: StudentsService){

  
    this.studentId = parseInt(this.router.snapshot.paramMap.get("id") || ''
  );

    this.studentsService.deleteStudent(this.studentId)
         .pipe(takeUntil(this.destroy$))
         .subscribe(data => {
          this.showSuccessMessage("Record deleted successfully");
        // alert("Record deleted successfully");
          this.route.navigate(['students']);
    })

  }

  showSuccessMessage(message: string){

    this.matSnackBar.open(message, 'Close',{
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });

  }

  ngDestroy(){
    this.destroy$.next();
    this.destroy$.complete();

  }

}
