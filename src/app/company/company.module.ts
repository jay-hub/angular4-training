
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CompanyListComponent } from './company-list.component';
import { CompanyDetailComponent } from './company-detail.component';
import { AddressComponent } from './address.component';
import { SharedModule } from "../shared/shared.module";
import { CompanyRoutes } from "./company.route";



@NgModule({
    imports: [SharedModule, RouterModule.forChild(CompanyRoutes)],
    exports: [],
    declarations: [CompanyListComponent, CompanyDetailComponent, AddressComponent],
    providers: [],
})
export class CompanyModule { }
