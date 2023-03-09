import { Routes } from "@angular/router";
import { SupplierListPageComponent } from "./pages/supplier-list-page/supplier-list-page.component";
import { SupplierDetailPageComponent } from "./pages/supplier-detail-page/supplier-detail-page.component";
import { SupplierRegistrationPageComponent } from "./pages/supplier-registration-page/supplier-registration-page.component";

export const routes: Routes = [
    { path: 'list', component: SupplierListPageComponent },
    { path: 'detail/:id', component: SupplierDetailPageComponent },
    { path: 'new', component: SupplierRegistrationPageComponent },
]