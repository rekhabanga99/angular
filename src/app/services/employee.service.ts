import { Injectable } from '@angular/core';
import { EmpName } from '../add-employee/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  nameInService: EmpName = {
    firstName: 'Rekha',
    lastName: 'Banga',
  };
  namesListService: EmpName[] = [
    {
      firstName: '',
      lastName: '',
    },
  ];
  constructor(private http: HttpClient) {}
  getAllData(): Observable<any> {
    return this.http.get(`https://dummy.restapiexample.com/api/v1/employees`)
 }
  getTime() {
    return new Date();
  }
  setName(name: EmpName) {
    this.nameInService = name;
    // console.log('Set name using service', this.nameInService);
  }
  getName() {
    const newName = JSON.parse(JSON.stringify(this.nameInService));
    // console.log('Get name using service', newName);
    return newName;
  }
  setNameList(nameList: EmpName) {
    const oldArray = this.namesListService.concat(nameList);
    // var newArray = oldArray.filter((v) => v.firstName != '');

    this.namesListService = oldArray;
    // console.log('Set name using service', this.namesListService);
  }
  getNameList() {
    const namesList = this.namesListService;
    return namesList;
  }
}
