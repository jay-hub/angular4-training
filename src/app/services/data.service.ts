import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { getSampleData } from "../data/sample-data";
import { Company } from "../models/company";
import { LoggerService } from "./logger.service";

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/Observable/of'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class DataService {

    private readonly companiesUrl: string = 'api/companies';
    private readonly provincesUrl: string = 'api/provinces';

    constructor(private logger: LoggerService, private http: Http){

    }

    getProvincesViahttp() : Observable<string[]>{
         return this.http.get(this.provincesUrl)
                .map((response) => {
                    return response.json().data as Company[];
                })
                .do((pro) => {
                    this.logger.log(`${pro.length} provinces are loaded via Http.`)
                }) //Optional
                .catch((error: string) => {
                    return Observable.throw(`There is an error while loading data: ${error}`);
                });
    }

    getCompaniesViaHttp() : Observable<Company[]>{

        return this.http.get(this.companiesUrl)
                .map((response) => {
                    return response.json().data as Company[];
                })
                .do((comp) => {
                    this.logger.log(`${comp.length} companies are loaded via Http.`)
                }) //Optional
                .catch((error: string) => {
                    return Observable.throw(`There is an error while loading data: ${error}`);
                });
    }

    getCompaniesAsync() : Observable<Company[]> {
        const companies = getSampleData();

        return of(companies)
                .delay(2000)
                .do((c) => {
                    this.logger.log(`${companies.length} companies are loaded Asynchronously via Observable.`)
                })

    }

    getCompanies(): Company[] {
        const companies = getSampleData();
        this.logger.log(`Got ${companies.length} companies.` )
        return companies;
    }
}