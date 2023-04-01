import { Component } from '@angular/core';
import { EmpName } from '../add-employee/types';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  friendslist: EmpName[] = []
  constructor(private employeeService: EmployeeService) {
  }
  getNameListUsingService() {
    this.friendslist = this.employeeService.getNameList();
    console.log('Thuii000000000000000000i',  this.friendslist)
  }
  ngOnInit() {
    this.getNameListUsingService()
  }

}
