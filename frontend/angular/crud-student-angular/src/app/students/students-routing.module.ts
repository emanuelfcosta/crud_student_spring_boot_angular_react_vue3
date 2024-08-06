import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: StudentsComponent},
  { path: 'add-student', component: AddComponent},
  { path: 'view-student/:id', component: ViewComponent},
  { path: 'edit-student/:id', component: EditComponent},
  {path: 'delete-student/:id', component: DeleteComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
