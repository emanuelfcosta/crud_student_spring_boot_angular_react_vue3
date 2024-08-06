import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  editStudentForm!: FormGroup ;

  studentData: Student | null = null;

  private destroy$ : Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private studentService: StudentsService,
    private router: Router
    ){

      this.editStudentForm = this.formBuilder.group({

        id: [''], 
        name: ['', Validators.required],
        email: ['', Validators.required]

      });
    }

    ngOnInit(){
      const id = parseInt(this.route.snapshot.paramMap.get("id") || '');

      if(id !== 0){
        this.studentService.getStudentById(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => {

          
          this.studentData = data;

          console.log(this.studentData);

          this.editStudentForm.patchValue(this.studentData);
        });
      }
    }

    onSubmit(){
      if(this.editStudentForm.valid){ 
      
        const updatedFormData: Student =this.editStudentForm.value;
       
        this.studentService.updateStudent(updatedFormData)
        .pipe(takeUntil(this.destroy$))
        .subscribe(()=>{
           this.router.navigate(['students']);
            this.showSuccessMessage("Student Updated Successfully"); 
        })
      }
    }

    showSuccessMessage(message: string){
        this.snackBar.open(message, 'Close',{
          duration: 3000
        })
    }

    ngOnDestroy(){
      this.destroy$.next();
      this.destroy$.complete();
    }

}
