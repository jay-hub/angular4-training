import { Component, OnInit } from '@angular/core';
import { Company } from "../models/company";
import { getSampleData } from "../data/sample-data";
import { DataService } from "../services/data.service";
import { LoggerService } from "../services/logger.service";

@Component({
    moduleId: module.id,
    selector: 'company-list',
    templateUrl: 'comapany-list.component.html',
    styleUrls: ['comapany-list.component.css']
})

export class CompanyListComponent implements OnInit {

    company: Company;

    companies: Company[];

    isbusy: boolean = false;

    constructor(private datService: DataService, private logger: LoggerService){
        
    }

    ngOnInit(){
        this.getCompaniesViaHttp();
    }

    getCompaniesViaHttp(){
        this.isbusy = true;
        this.datService.getCompaniesViaHttp().subscribe((comp) => {
            this.companies = comp;
            this.isbusy = false;
        },
        (error) =>{
            this.logger.log(error);
        });
    }

    getCompaniesAsync(){
        this.isbusy = true;
        this.datService.getCompaniesAsync().subscribe((comp) => {
            this.companies = comp;
            this.isbusy = false;
        })
    }



    shiftCompany(increment: number){
        let index = this.companies.findIndex(c => c === this.company) + increment;
        index = Math.min(Math.max(0, index), this.companies.length -1);
        this.company = this.companies[index];
    }

}