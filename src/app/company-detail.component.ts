
import { Component, Input } from '@angular/core';
import { Company } from "./models/company";

@Component({
    moduleId: module.id,
    selector: 'company-detail',
    templateUrl: 'company-detail.component.html',
    styles: [`
        h1{
            color: green;
            font-size: 150%;
        }
    `]
})

export class CompanyDetailComponent {

    @Input() company: Company

    provinces = ['Western', 'Eastern', 'Southern', 'Nothern']

    showAddress: boolean = true;

    toggleAddress() {
        this.showAddress = !this.showAddress;
    }
}