import { Component, Input, OnInit } from '@angular/core';
import { Address } from "./models/address";
import { DataService } from "./services/data.service";
import { LoggerService } from "./services/logger.service";

@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html'
})

export class AddressComponent implements OnInit {
    @Input() address: Address;
    
    provinces: string[] = [];

    constructor(private dataService: DataService, private logger: LoggerService){

    }

    ngOnInit(){
        this.getProvinces();
    }

    getProvinces(){
        this.dataService.getProvincesViahttp().subscribe((p) => {
            this.provinces = p;
        },
        (error) =>{
            this.logger.log(error);
        })
    }
}