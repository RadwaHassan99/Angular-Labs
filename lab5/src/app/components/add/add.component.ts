import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Lab4Service } from 'src/app/Services/lab4.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  form: FormGroup;

  constructor(private myService: Lab4Service, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl(),
      id: new FormControl(),
      age: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl()
    });
  }

  onSubmit() {
    const newStudent = this.form.value;
    this.myService.addUser(newStudent).subscribe(
      {
        next: () => {
          console.log('Student added successfully');
          this.router.navigate(['/students']);
        },
        error: (err) => {
          console.log('Error adding student:', err);
        }
      }
    );
  }
}
