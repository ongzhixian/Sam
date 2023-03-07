import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SupplierListPageComponent } from './pages/supplier-list-page/supplier-list-page.component';
import { SupplierDetailPageComponent } from './pages/supplier-detail-page/supplier-detail-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';

import { MessagesWidgetComponent } from './widgets/messages-widget/messages-widget.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { AdminHomePageComponent } from './pages/admin/admin-home-page/admin-home-page.component';
import { AdminUserListPageComponent } from './pages/admin/admin-user-list-page/admin-user-list-page.component';
import { ForbiddenPageComponent } from './pages/status/forbidden-page/forbidden-page.component';
import { UnauthorizedPageComponent } from './pages/status/unauthorized-page/unauthorized-page.component';
import { UserAccountsPageComponent } from './pages/company/user-accounts-page/user-accounts-page.component';
import { EmployeesPageComponent } from './pages/company/employees-page/employees-page.component';
import { CompanyHomePageComponent } from './pages/company/company-home-page/company-home-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { SupplierPurchaseOrderListPageComponent } from './pages/supplier/supplier-purchase-order-list-page/supplier-purchase-order-list-page.component';
import { SupplierPurchaseOrderDetailPageComponent } from './pages/supplier/supplier-purchase-order-detail-page/supplier-purchase-order-detail-page.component';
import { CustomerListPageComponent } from './pages/customer/customer-list-page/customer-list-page.component';
import { CustomerDetailPageComponent } from './pages/customer/customer-detail-page/customer-detail-page.component';
import { CustomerSalesOrderListPageComponent } from './pages/customer/customer-sales-order-list-page/customer-sales-order-list-page.component';
import { CustomerSalesOrderDetailPageComponent } from './pages/customer/customer-sales-order-detail-page/customer-sales-order-detail-page.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        SupplierListPageComponent,
        SupplierDetailPageComponent,
        DashboardPageComponent,
        LogoutPageComponent,
        MessagesWidgetComponent,
        DefaultLayoutComponent,
        AuthenticationLayoutComponent,
        IntroductionPageComponent,
        AdminHomePageComponent,
        AdminUserListPageComponent,
        ForbiddenPageComponent,
        UnauthorizedPageComponent,
        UserAccountsPageComponent,
        EmployeesPageComponent,
        CompanyHomePageComponent,
        ProductListPageComponent,
        SupplierPurchaseOrderListPageComponent,
        SupplierPurchaseOrderDetailPageComponent,
        CustomerListPageComponent,
        CustomerDetailPageComponent,
        CustomerSalesOrderListPageComponent,
        CustomerSalesOrderDetailPageComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        MatIconModule,
        MatToolbarModule,
        MatSlideToggleModule,
        LayoutModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
