import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: PageNotFoundComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'employees-list', component: EmployeeListComponent, pathMatch: 'full' },
  { path: 'add-employee', component: AddEmployeeComponent, pathMatch: 'full' },
  { path: 'update-employee', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
