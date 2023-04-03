import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './shared/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
// declare to use service
import { EmployeeService } from './services/employee.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeBindingsComponent } from './employee-bindings/employee-bindings.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CustomHoverDirective } from './directive/custom-hover.directive';

@NgModule({
  declarations: [AppComponent, AddEmployeeComponent, DashboardComponent, HeaderComponent, FooterComponent, PageNotFoundComponent, EmployeeBindingsComponent, EmployeeListComponent, CustomHoverDirective],
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
