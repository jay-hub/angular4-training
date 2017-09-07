
import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { getSampleData } from "../data/sample-data";

@Injectable()
export class InMoemoryDataService implements InMemoryDbService {
        
    createDb() {
        return { companies: getSampleData(), provinces: ['Western', 'Eastern', 'Southern', 'Nothern', "Central"] };
    }
}