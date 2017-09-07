
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor() { }

    log(msg: String){
        console.log(msg);
    }
}