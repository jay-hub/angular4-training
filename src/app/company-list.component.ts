import { Component } from '@angular/core';
import { Company } from "./models/company";
import { getSampleData } from "./data/sample-data";

@Component({
    moduleId: module.id,
    selector: 'company-list',
    templateUrl: 'comapany-list.component.html',
    styleUrls: ['comapany-list.component.css']
})

export class CompanyListComponent {
    company: Company;

    companies: Company[] = getSampleData();

}