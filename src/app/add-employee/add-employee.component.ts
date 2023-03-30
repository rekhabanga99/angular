import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmpName } from './types';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  constructor() {
    this.title = '';
    this.name = {
      firstName: '',
      lastName: '',
    };
  }
  @Input() title = ''; // decorate the property with @Input()
  @Input() name: EmpName;

  @Output() handleNameInChild = new EventEmitter<EmpName>();

  changeName() {
    console.log('Child says: emitting item change Name with', this.name);
    this.handleNameInChild.emit(this.name);
  }
}


