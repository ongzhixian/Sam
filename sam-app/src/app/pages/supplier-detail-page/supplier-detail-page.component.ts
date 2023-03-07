import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Supplier } from 'src/app/entities/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
    selector: 'app-supplier-detail-page',
    templateUrl: './supplier-detail-page.component.html',
    styleUrls: ['./supplier-detail-page.component.css']
})
export class SupplierDetailPageComponent {
    @Input() supplier?: Supplier;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private supplierService: SupplierService) { 
    }

    ngOnInit() {
        this.getSupplier();
    }

    getSupplier(): void {
        const id = String(this.route.snapshot.paramMap.get('id'));
        this.supplierService.getSupplier(id)
            .subscribe(supplier => this.supplier = supplier);
    }

    goBack(): void {
        this.location.back();
    }
}
