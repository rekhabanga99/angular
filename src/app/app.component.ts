import { Component, OnInit } from '@angular/core';
import { EmpName } from './add-employee/types';

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
  constructor() {}
  ngOnInit() {}
  handleNameInParent(name: EmpName) {
    console.log(`Parent says: Change ${this.employeeName}.`);
    this.employeeName = name;
    console.log(this.employeeName);
  }
}