"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var company_1 = require("./models/company");
var CompanyDetailComponent = (function () {
    function CompanyDetailComponent() {
        this.provinces = ['Western', 'Eastern', 'Southern', 'Nothern'];
        this.showAddress = true;
    }
    CompanyDetailComponent.prototype.toggleAddress = function () {
        this.showAddress = !this.showAddress;
    };
    return CompanyDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", company_1.Company)
], CompanyDetailComponent.prototype, "company", void 0);
CompanyDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'company-detail',
        templateUrl: 'company-detail.component.html',
        styles: ["\n        h1{\n            color: green;\n            font-size: 150%;\n        }\n    "]
    })
], CompanyDetailComponent);
exports.CompanyDetailComponent = CompanyDetailComponent;
//# sourceMappingURL=company-detail.component.js.map