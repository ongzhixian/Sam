import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierListPageComponent } from './pages/supplier-list-page/supplier-list-page.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { SupplierDetailPageComponent } from './pages/supplier-detail-page/supplier-detail-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SupplierListPageComponent,
        SupplierDetailPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatTableModule
    ]
})
export class SupplierModule { }
