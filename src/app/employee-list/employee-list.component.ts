import { Component } from '@angular/core';
import { EmpName } from '../add-employee/types';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  friendslist: any[] = [];
  public show: boolean = true;
  public buttonName: any = 'Show';
  displayedColumns: string[] = ['id', 'name', 'age', 'salary','actions'];
  dataSource: any = [];
  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if (this.show) this.buttonName = 'Hide';
    else this.buttonName = 'Show';
  }
  constructor(private router: Router, private employeeService: EmployeeService) {}
  getNameListUsingService() {
    this.friendslist = this.employeeService.getNameList();
  }
  ngOnInit() {
    this.getNameListUsingService();
    this.employeeService.getAllData().subscribe((res) => {
      console.log(res);
      this.friendslist = res.data;
      this.dataSource = res.data;
    });
  }
  handleAdd(){
    this.router.navigate(['/', 'add-employee'])
  }
  handleUpdate(){
    this.router.navigate(['/', 'add-employee'])
  }
  handleDelete(){
    this.router.navigate(['/', 'add-employee'])
  }
}
