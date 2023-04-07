import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './shared/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
// declare to use service
import { EmployeeService } from './services/employee.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CustomHoverDirective } from './directive/custom-hover.directive';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
// import { Dialog } from './components/modals/confirmation';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AlertDialogComponent } from './components/modals/alert-dialog.component';
import { ConfirmationDialog } from './components/modals/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    CustomHoverDirective,
    UpdateEmployeeComponent,
    AlertDialogComponent,
    ConfirmationDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule  ],
  // add service name in provider
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
