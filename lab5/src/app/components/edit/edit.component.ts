import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lab4Service } from  'src/app/Services/lab4.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  ID: any;
  student: any;
  form: FormGroup;

  constructor(private myRoute: ActivatedRoute, public myService: Lab4Service, private router: Router) {
    this.ID = myRoute.snapshot.params["id"];
    this.form = new FormGroup({
      name: new FormControl(),
      id: new FormControl(),
      age: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl()
    });
  }

  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe(
      {
        next: (data) => {
          this.student = data;
          this.form.setValue({
            name: this.student.name,
            id: this.student.id,
            age: this.student.age,
            email: this.student.email,
            phone: this.student.phone,
            address: this.student.address
          });
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

  onSubmit() {
    const updatedStudent = this.form.value;
    this.myService.updateUser(this.ID, updatedStudent).subscribe(
      {
        next: () => {
          console.log('Student updated successfully');
          this.router.navigate(['/students']);
        },
        error: (err) => {
          console.log('Error updating student:', err);
        }
      }
    );
  }
}
