import { Component, OnInit } from '@angular/core';
import { EmpName } from '../add-employee/types';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-bindings',
  templateUrl: './employee-bindings.component.html',
  styleUrls: ['./employee-bindings.component.css']
})
export class EmployeeBindingsComponent implements OnInit {
  currentItem = 'Employee Details';
  employeeName = {
    firstName: 'Rekha',
    lastName: 'Banga',
  };
  currentDate: string = '';
  currentTime: string = '';
  empName: EmpName = {
    firstName: '',
    lastName: '',
  };
  nameList: EmpName[] = [{
    firstName: '',
    lastName: '',
  }];
  name: string = '';
  // <!-- Data from service -->
  constructor(private router: Router, private employeeService: EmployeeService) {
    this.currentDate = this.employeeService.getTime().toLocaleDateString();
    this.currentTime = this.employeeService.getTime().toLocaleTimeString();
  }
  ngOnInit(): void {
    this.empName = {
      firstName: 'First Name set by parent',
      lastName: 'LastName set by parent',
    };
    this.employeeService.setName(this.empName);
  }
  // output binding
  handleNameInParent(name: EmpName) {
    console.log(`Parent says: Change ${this.empName}.`);
    this.empName = name;
    console.log(this.empName);
  }

  // set name using service
  setNameUsingService(name: EmpName) {
    this.employeeService.setName(name);
  }
  setNameListUsingService() {
    this.employeeService.setNameList(this.empName);
    this.router.navigate(['/', 'employees-list'])
  }
  getNameListUsingService() {
    this.nameList = this.employeeService.getNameList();
    console.log('Thuiii',  this.nameList)
  }
}
