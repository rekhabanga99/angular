import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmpName } from './types';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  name:EmpName={
    firstName: '',
    lastName: ''
  }
  constructor(private employeeService: EmployeeService) {
    this.title = '';
  }
  @Input() title = ''; // decorate the property with @Input()
  @Output() handleNameInChild = new EventEmitter<EmpName>();

  changeName() {
    const newName = JSON.parse(JSON.stringify(this.name))
    console.log('Child says: emitting item change Name with',newName);
    this.handleNameInChild.emit(newName);
  }
    // set name using service
    setNameUsingService(name: EmpName) {
      this.employeeService.setName(name);
    }
    // get name using service
    getNameUsingService() {
      this.employeeService.getName();
    }
}


