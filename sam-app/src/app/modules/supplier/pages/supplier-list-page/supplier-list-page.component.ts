import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from '../../entities/supplier';

export const SUPPLIERS: Supplier[] = [
    { id: "12", name: 'Dr. Nice' },
    { id: "13", name: 'Bombasto' },
    { id: "14", name: 'Celeritas' },
    { id: "15", name: 'Magneta' },
    { id: "16", name: 'RubberMan' },
    { id: "17", name: 'Dynama' },
    { id: "18", name: 'Dr. IQ' },
    { id: "19", name: 'Magma' },
    { id: "20", name: 'Tornado' }
];

@Component({
    selector: 'app-supplier-list-page',
    templateUrl: './supplier-list-page.component.html',
    styleUrls: ['./supplier-list-page.component.css']
})
export class SupplierListPageComponent implements OnInit {

    title: string = "Supplier List";

    suppliers = SUPPLIERS;

    selectedSupplier?: Supplier;

    displayedColumns: string[] = ['id', 'name'];
    // dataSource = ELEMENT_DATA;

    getSuppliers(): void {
        this.supplierService
            .getSuppliers()
            .subscribe(suppliers => this.suppliers = suppliers)
    }

    onSelect(supplier: Supplier): void {
        this.selectedSupplier = supplier;
        this.messageService.add(`SupplierListPageComponent: Selected supplier id=${supplier.id}`);
    }

    ngOnInit() {
        this.getSuppliers();
    }

    constructor(private supplierService: SupplierService
        , private messageService: MessageService) { }

}
