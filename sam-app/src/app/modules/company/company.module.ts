import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserAccountPageComponent } from './pages/user-account-page/user-account-page.component';
import { EmployeeListPageComponent } from './pages/employee-list-page/employee-list-page.component';
import { UserAccountListPageComponent } from './pages/user-account-list-page/user-account-list-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    UserAccountPageComponent,
    EmployeeListPageComponent,
    UserAccountListPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
