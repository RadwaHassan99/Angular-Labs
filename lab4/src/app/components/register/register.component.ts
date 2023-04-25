import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(20), Validators.max(40)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    address: new FormControl('')
  });

  onSubmit() {
    if (this.registrationForm.valid) {
      const successModal = document.getElementById('successModal');
      successModal?.classList.add('show');  
    }
  }
}
