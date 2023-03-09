import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './pages/status/not-found-page/not-found-page.component';
import { routes as developerModuleRoutes } from './modules/developer/developer.routes';
import { routes as companyModuleRoutes } from './modules/company/company.routes';
import { routes as supplierModuleRoutes } from './modules/supplier/supplier.routes';


const routes: Routes = [
    // {
    //     path: 'admin'
    //     , component: AuthenticationLayoutComponent
    //     , children: [

    //         { path: 'home', component: AdminHomePageComponent },
    //         { path: 'user', component: AdminUserListPageComponent },
    //         { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    //         { path: '**', component: NotFoundPageComponent }
    //     ]
    // },
    // {
    //     path: 'auth'
    //     , component: AuthenticationLayoutComponent
    //     , children: [

    //         { path: 'login', component: LoginPageComponent },
    //         { path: 'logout', component: LogoutPageComponent },
    //         { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    //         { path: '**', component: NotFoundPageComponent }
    //     ]
    // },

    {
        path: 'supplier'
        , component: DefaultLayoutComponent
        , children: [
            ...supplierModuleRoutes,
            // { path: 'list', component: SupplierListPageComponent },
            // { path: 'purchase-order-list', component: SupplierPurchaseOrderListPageComponent },
            { path: '', redirectTo: '/company/home', pathMatch: 'full' },
            { path: '**', component: NotFoundPageComponent }
        ]
    },
    // {
    //     path: 'customer'
    //     , component: DefaultLayoutComponent
    //     , canActivate: [authenticatedUserGuard]
    //     , children: [
    //         { path: 'list', component: CustomerListPageComponent },
    //         { path: 'sales-order-list', component: CustomerSalesOrderListPageComponent },
    //         { path: '', redirectTo: '/company/home', pathMatch: 'full' },
    //         { path: '**', component: NotFoundPageComponent }
    //     ]
    // },
    {
        path: 'company'
        , component: DefaultLayoutComponent
        , children: [
            ...companyModuleRoutes,
            { path: '', redirectTo: '/company/home', pathMatch: 'full' },
            { path: '**', component: NotFoundPageComponent }
        ]
    },
    {
        path: 'developer'
        , component: DefaultLayoutComponent
        , children: [
            ...developerModuleRoutes,
            { path: '', redirectTo: '/company/home', pathMatch: 'full' },
            { path: '**', component: NotFoundPageComponent }
        ]
    },
    {
        path: ''
        , component: DefaultLayoutComponent
        , children: [
            { path: 'dashboard', component: DashboardPageComponent },
            { path: 'products', component: DashboardPageComponent },
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
