import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatTableModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatTableModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule
    ]
})
export class AngularMaterialModule { }
