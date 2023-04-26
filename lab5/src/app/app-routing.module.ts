import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';
import { AddComponent } from './components/add/add.component';
import { TableComponent } from './components/table/table.component';
import { ErrorComponent } from './components/error/error.component';
const routes: Routes = [
  {path:'', component:TableComponent},
  {path:'students', component:TableComponent},
  {path:'students/add', component:AddComponent},
  {path:'students/:id', component:DetailsComponent},
  {path:'students/:id/edit', component:EditComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
