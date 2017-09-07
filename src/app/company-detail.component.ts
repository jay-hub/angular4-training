
import { Component, Input, Output, EventEmitter } from '@angular/core';
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

    @Output() shift = new EventEmitter<number>();

    showAddress: boolean = true;

    previous(){
        this.shift.emit(-1)
    }

    next(){
        this.shift.emit(1)
    }
}