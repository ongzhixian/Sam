import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { NotFoundPageComponent } from './pages/status/not-found-page/not-found-page.component';
import { ForbiddenPageComponent } from './pages/status/forbidden-page/forbidden-page.component';
import { UnauthorizedPageComponent } from './pages/status/unauthorized-page/unauthorized-page.component';
import { DeveloperModule } from './modules/developer/developer.module';
import { CompanyModule } from './modules/company/company.module';
import { SupplierModule } from './modules/supplier/supplier.module';

@NgModule({
    declarations: [
        AppComponent,
        DashboardPageComponent,
        DefaultLayoutComponent,
        AuthenticationLayoutComponent,
        NotFoundPageComponent,
        ForbiddenPageComponent,
        UnauthorizedPageComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        DeveloperModule,
        CompanyModule,
        SupplierModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
