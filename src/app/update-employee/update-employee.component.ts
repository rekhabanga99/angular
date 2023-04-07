import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Employee, EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'update-employee-profile',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  profileForm = this.fb.group({
    name: ['Rekha', Validators.required],
    email: ['rekhabanga103@gmail.com'],
    phone: 30000,
    empId: ''
  });
  private routeSub: Subscription = new Subscription;
  empId: any;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id'],  'idddd') //log the value of id
      this.empId = params['id']
    });
  }

  handleUpdate() {
    console.log('update');
    this.employeeService.updateEmployee(this.empId, {
      name: this.profileForm.value.name,
      phone: this.profileForm.value.phone,
      email: this.profileForm.value.email,
    } as Employee);
  }
}
