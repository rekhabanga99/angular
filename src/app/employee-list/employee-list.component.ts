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
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'actions'];
  dataSource: any = [];
  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if (this.show) this.buttonName = 'Hide';
    else this.buttonName = 'Show';
  }
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}
  ngOnInit() {
    this.employeeService.getAllData().subscribe((response: any) => {
      const newArray = response.concat(this.employeeService.nameAdded);
      const updatedList = newArray?.map((item: any, index: any) => {
        return {
          ...item,
          id: item.id ? item.id : index,
        };
      });

      this.dataSource = updatedList;

      console.log(updatedList, 'this.dataSource');
    });
  }

  navigateToAdd() {
    this.router.navigate(['/', 'add-employee']);
  }
  navigateToUpdate() {
    this.router.navigate(['/', 'update-employee']);
  }
  navigateToDelete() {
    this.router.navigate(['/', 'delete-employee']);
  }
}
