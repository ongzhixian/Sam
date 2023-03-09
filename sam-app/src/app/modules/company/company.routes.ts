import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { EmployeeListPageComponent } from "./pages/employee-list-page/employee-list-page.component";
import { UserAccountListPageComponent } from "./pages/user-account-list-page/user-account-list-page.component";

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'employees', component: EmployeeListPageComponent },
    { path: 'user-accounts', component: UserAccountListPageComponent },
]