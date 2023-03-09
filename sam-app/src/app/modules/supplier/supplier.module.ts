import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierListPageComponent } from './pages/supplier-list-page/supplier-list-page.component';
import { RouterModule } from '@angular/router';

import { SupplierDetailPageComponent } from './pages/supplier-detail-page/supplier-detail-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatTableModule} from '@angular/material/table';
// import {MatButtonModule} from '@angular/material/button'; 
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SupplierRegistrationPageComponent } from './pages/supplier-registration-page/supplier-registration-page.component';

@NgModule({
    declarations: [
        SupplierListPageComponent,
        SupplierDetailPageComponent,
        SupplierRegistrationPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        //MatTableModule,
        AngularMaterialModule,
        ReactiveFormsModule
    ]
})
export class SupplierModule { }
