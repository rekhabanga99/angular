import { Component, OnInit } from '@angular/core';
import { EmpName } from '../add-employee/types';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
  name: string = '';
  // <!-- Data from service -->
  constructor(private employeeService: EmployeeService) {
    this.currentDate = this.employeeService.getTime().toLocaleDateString();
    this.currentTime = this.employeeService.getTime().toLocaleTimeString();
  }
  ngOnInit(): void {
    this.empName = {
      firstName: 'First Name set by parent',
      lastName: 'LasrName set by parent',
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
}
