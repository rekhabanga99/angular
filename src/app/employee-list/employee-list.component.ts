import { Component } from '@angular/core';
import { EmpName } from '../add-employee/types';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmationDialog} from '../components/modals/confirmation-dialog.component';
import { AlertDialogComponent } from '../components/modals/alert-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar,
    private employeeService: EmployeeService,
    public dialog: MatDialog
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
  navigateToUpdate(id: number) {
    this.router.navigate(['/', 'update-employee', id]);
  }
  navigateToDelete() {
    this.router.navigate(['/', 'delete-employee']);
  }
  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
    const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.snackBar.open('Closing snack bar in a few seconds', 'Fechar', {
          duration: 2000,
        });
      }
    });
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data:{
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }
}
