import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    StudentsComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
    
    
  ]
})
export class StudentsModule { }
