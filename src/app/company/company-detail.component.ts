
import { Router, ActivatedRoute } from '@angular/router'
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Company } from "../models/company";
import { DataService } from "../services/data.service";


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

    companyId: number = 0;

    @Output() shift = new EventEmitter<number>();

    showAddress: boolean = true;

    constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router){

    }

    ngOnInit(){

        //  let companyId = +this.route.snapshot.params['id'];
        //  this.getCompaniesHttp(companyId);
        //  this.companyId = companyId;

        this.route.params.subscribe((params) => {
            let companyId = +params['id'];
            this.getCompaniesHttp(companyId);
            this.companyId = companyId;
        })

        
    }

    getCompaniesHttp(companyId: number) {
        this.dataService.getCompaniesViaHttp().subscribe((companies) => {
            this.company = companies.filter(c => c.id == companyId)[0];
        },
        (error) => {
            //this.loggerService.log(`Error in retrieving data: ${error}`)
        })
    }


    previous(){
        //this.shift.emit(-1)
        if(this.companyId > 1 && this.companyId < 4)
            this.router.navigate(['./companies', this.companyId - 1])
    }

    next(){
        //this.shift.emit(1)
        if(this.companyId >= 1 && this.companyId < 3)
            this.router.navigate(['./companies', this.companyId + 1])
    }
}