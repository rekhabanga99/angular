import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    age: [''],
    salary:[''],
  });

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    const paylaod =  {"name":"test","salary":"123","age":"23"}
    this.profileForm.patchValue(paylaod
    );
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
