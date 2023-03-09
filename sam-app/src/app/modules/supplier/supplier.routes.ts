import { Routes } from "@angular/router";
import { SupplierListPageComponent } from "./pages/supplier-list-page/supplier-list-page.component";
import { SupplierDetailPageComponent } from "./pages/supplier-detail-page/supplier-detail-page.component";

export const routes: Routes = [
    { path: 'list', component: SupplierListPageComponent },
    { path: 'detail/:id', component: SupplierDetailPageComponent },
]