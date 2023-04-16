import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  stdName="";
  stdAge="";
  studentData = { name: '', age: '' };
  @Output() registerEvent = new EventEmitter();
  Add(){
    this.studentData = {name:this.stdName,age:this.stdAge};
    this.registerEvent.emit(this.studentData);
  }
}
