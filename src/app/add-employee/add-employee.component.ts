import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Employee, EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    phone: [9000, Validators.required],
    email: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  handleAdd() {
    console.log('calleed');

    this.employeeService.addEmployee({
      name: this.profileForm.value.name,
      phone: this.profileForm.value.phone,
      email: this.profileForm.value.email,
    } as Employee);
  }

  handleUpdate(id: number) {
    console.log('update');
    this.employeeService.updateEmployee(id, {
      name: this.profileForm.value.name,
      phone: this.profileForm.value.phone,
      email: this.profileForm.value.email,
    } as Employee);
  }
  handleDelete() {
    console.log('delete');
    this.employeeService.deleteEmployee(1);
  }
}
