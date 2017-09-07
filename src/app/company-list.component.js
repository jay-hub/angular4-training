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
var data_service_1 = require("./services/data.service");
var logger_service_1 = require("./services/logger.service");
var CompanyListComponent = (function () {
    function CompanyListComponent(datService, logger) {
        this.datService = datService;
        this.logger = logger;
        this.isbusy = false;
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        this.getCompaniesViaHttp();
    };
    CompanyListComponent.prototype.getCompaniesViaHttp = function () {
        var _this = this;
        this.isbusy = true;
        this.datService.getCompaniesViaHttp().subscribe(function (comp) {
            _this.companies = comp;
            _this.isbusy = false;
        }, function (error) {
            _this.logger.log(error);
        });
    };
    CompanyListComponent.prototype.getCompaniesAsync = function () {
        var _this = this;
        this.isbusy = true;
        this.datService.getCompaniesAsync().subscribe(function (comp) {
            _this.companies = comp;
            _this.isbusy = false;
        });
    };
    CompanyListComponent.prototype.shiftCompany = function (increment) {
        var _this = this;
        var index = this.companies.findIndex(function (c) { return c === _this.company; }) + increment;
        index = Math.min(Math.max(0, index), this.companies.length - 1);
        this.company = this.companies[index];
    };
    return CompanyListComponent;
}());
CompanyListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'company-list',
        templateUrl: 'comapany-list.component.html',
        styleUrls: ['comapany-list.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, logger_service_1.LoggerService])
], CompanyListComponent);
exports.CompanyListComponent = CompanyListComponent;
//# sourceMappingURL=company-list.component.js.map