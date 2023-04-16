import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './ComponentInteraction/registration/registration.component';
import { StudentsComponent } from './ComponentInteraction/students/students.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  parentData = "2na Data Mn El Parent";

  DataFromLogin = "";

  getData(data:any){
    // console.log(data);
    this.DataFromLogin = data;
  }
}
