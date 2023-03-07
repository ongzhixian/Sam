import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticatedUserGuard } from './guards/authentication.guard';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AdminHomePageComponent } from './pages/admin/admin-home-page/admin-home-page.component';
import { AdminUserListPageComponent } from './pages/admin/admin-user-list-page/admin-user-list-page.component';
import { NotFoundPageComponent } from './pages/status/not-found-page/not-found-page.component';
import { EmployeesPageComponent } from './pages/company/employees-page/employees-page.component';
import { UserAccountsPageComponent } from './pages/company/user-accounts-page/user-accounts-page.component';
import { CompanyHomePageComponent } from './pages/company/company-home-page/company-home-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { SupplierListPageComponent } from './pages/supplier/supplier-list-page/supplier-list-page.component';
import { SupplierPurchaseOrderListPageComponent } from './pages/supplier/supplier-purchase-order-list-page/supplier-purchase-order-list-page.component';
import { CustomerListPageComponent } from './pages/customer/customer-list-page/customer-list-page.component';
import { CustomerSalesOrderListPageComponent } from './pages/customer/customer-sales-order-list-page/customer-sales-order-list-page.component';

export enum xxxApplicationLayoutType {
    Default = 'default',                // Use for authenticated users to show application capability
    Blank = 'blank',                    // Blank layout for simple error reporting (404, 500 HTTP errors)
    Guest = 'guest',                    // Layout of application for guest users
    Authentication = 'authentication',  // Layout of application for use with authentication
    Sidebar = 'sidebar', // with sidebar
    Center = 'center', // centered content, no frame
    Admin = 'admin', // admin layout
}

const routes: Routes = [
    {
        path: 'admin'
        , component: AuthenticationLayoutComponent
        , children: [
            
            { path: 'home', component: AdminHomePageComponent },
            { path: 'user', component: AdminUserListPageComponent },
            { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
            { path: '**', component: NotFoundPageComponent }
        ]
    },
    {
        path: 'auth'
        , component: AuthenticationLayoutComponent
        , children: [
            
            { path: 'login', component: LoginPageComponent },
            { path: 'logout', component: LogoutPageComponent },
            { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
            { path: '**', component: NotFoundPageComponent }
        ]
    },
    {
        path: 'company'
        , component: DefaultLayoutComponent
        , children: [
            { path: 'home', component: CompanyHomePageComponent },
            { path: 'employees', component: EmployeesPageComponent },
            { path: 'user-accounts', component: UserAccountsPageComponent },
            { path: '', redirectTo: '/company/home', pathMatch: 'full' },
            { path: '**', component: NotFoundPageComponent }
        ]
    },
    {
        path: 'supplier'
        , component: DefaultLayoutComponent
        , children: [
            { path: 'list', component: SupplierListPageComponent },
            { path: 'purchase-order-list', component: SupplierPurchaseOrderListPageComponent },
            { path: '', redirectTo: '/company/home', pathMatch: 'full' },
            { path: '**', component: NotFoundPageComponent }
        ]
    },
    {
        path: 'customer'
        , component: DefaultLayoutComponent
        , canActivate: [authenticatedUserGuard]
        , children: [
            { path: 'list', component: CustomerListPageComponent },
            { path: 'sales-order-list', component: CustomerSalesOrderListPageComponent },
            { path: '', redirectTo: '/company/home', pathMatch: 'full' },
            { path: '**', component: NotFoundPageComponent }
        ]
    },
    {
        path: ''
        , component: DefaultLayoutComponent
        , children: [
            { path: 'dashboard', component: DashboardPageComponent },
            { path: 'products', component: ProductListPageComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: '**', component: NotFoundPageComponent }
        ]
    },
    // Authentication (anonymous users) routes
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }