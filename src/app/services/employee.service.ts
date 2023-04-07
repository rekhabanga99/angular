import { Injectable } from '@angular/core';
import { EmpName } from '../add-employee/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
export type Employee = { name: string; phone: number; email: string, empId?:string };
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  nameAdded: any[] =[]
  namesListService: any = [];
  constructor(private router: Router, private http: HttpClient) {}

  private url = 'https://jsonplaceholder.typicode.com/users';  
  addEmployee(payload: Employee) {
    this.http
      .post<Employee>(this.url, JSON.stringify(payload))
      .subscribe((data) => {
        this.router.navigate(['/', 'employees-list']);
        this.nameAdded.push(payload)
      });
  }

  updateEmployee(id: number, payload: Employee) {
    this.http
      .put<Employee>(`${this.url}/${id}`, JSON.stringify(payload))
      .subscribe((data) => {
        this.router.navigate(['/', 'employees-list']);
        this.nameAdded.push(payload)
      });
  }

  deleteEmployee(id: number) {
    this.http
      .delete<Employee>(`${this.url}/${id}`)
      .subscribe((data) => {
        this.router.navigate(['/', 'employees-list']);
         console.log(data, 'deleteEmployee')
      });
  }

  getAllData() {  
    return this.http.get(this.url)
  }  

  getTime() {
    return new Date();
  }
  getNameList() {
      return this.nameAdded;
  }
}
