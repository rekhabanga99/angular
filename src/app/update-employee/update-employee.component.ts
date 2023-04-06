import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'update-employee-profile',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: [''],
    phone: [''],
  });

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {}

  updateProfile() {
    const paylaod = { name: 'test', phone: '123', email: '23' };
    this.profileForm.patchValue(paylaod);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  handleAdd() {
    this.employeeService.addEmployee({
      name: 'test',
      phone: 12399999,
      email: '23',
    });
    this.router.navigate(['/', 'employees-list']);
  }
  handleUpdate() {
    console.log('update');
    this.employeeService.updateEmployee(1, {
      name: 'test',
      phone: 12399999999,
      email: '23',
    });
  }
  handleDelete() {
    console.log('delete');
    this.employeeService.deleteEmployee(1);
  }
}
