import { Injectable } from '@angular/core';
import { EmpName } from '../add-employee/types';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  nameInService: EmpName = {
    firstName: 'Rekha',
    lastName: 'Banga',
  };
  namesListService: EmpName[] = [{
    firstName : '',
    lastName: '',
  }];
  constructor() {}
  getTime() {
    return new Date();
  }
  setName(name: EmpName) {
    this.nameInService = name;
    console.log('Set name using service',  this.nameInService)
  }
  getName() {
    const newName = JSON.parse(JSON.stringify(this.nameInService));
    console.log('Get name using service', newName)
    return newName;
  }
  setNameList(nameList: EmpName) {
    this.namesListService = this.namesListService.concat(nameList);
    console.log('Set name using service',  this.namesListService)
  }
  getNameList() {
    const namesList = this.namesListService;
    return namesList;
  }
}
