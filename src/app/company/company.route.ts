import { Routes } from "@angular/router";
import { CompanyListComponent } from "./company-list.component";
import { CompanyDetailComponent } from "./company-detail.component";


export const CompanyRoutes: Routes = [
    { path: 'companies', component: CompanyListComponent },
    { path: 'companies/:id', component: CompanyDetailComponent }
]