import { Injectable } from '@angular/core';
import { EmpName } from '../add-employee/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
type Employee = { name: string; salary: string; age: string };
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
    return this.http.get(`https://dummy.restapiexample.com/api/v1/employees`);
  }
  addEmployee(payload: Employee) {
    this.http
      .post<Employee>(`https://dummy.restapiexample.com/api/v1/create`, payload)
      .subscribe((data) => {
        console.log('add--------', data);

      });
  }
  updateEmployee(id: number, payload: Employee): Observable<any> {
    return this.http.put(
      `https://dummy.restapiexample.com/api/v1/update/${id}`,
      payload
    );
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(
      `https://dummy.restapiexample.com/api/v1/delete/${id}`
    );
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
