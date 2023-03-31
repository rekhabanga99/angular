import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AddEmployeeComponent } from '../add-employee/add-employee.component';
// declare to use service
import { EmployeeService } from '../services/employee.service';

@NgModule({
  declarations: [AppComponent, AddEmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
  ],
  // add service name in provider
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
