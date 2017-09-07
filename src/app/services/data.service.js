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
var http_1 = require("@angular/http");
var sample_data_1 = require("../data/sample-data");
var logger_service_1 = require("./logger.service");
var Observable_1 = require("rxjs/Observable");
var of_1 = require("rxjs/Observable/of");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var DataService = (function () {
    function DataService(logger, http) {
        this.logger = logger;
        this.http = http;
        this.companiesUrl = 'api/companies';
        this.provincesUrl = 'api/provinces';
    }
    DataService.prototype.getProvincesViahttp = function () {
        var _this = this;
        return this.http.get(this.provincesUrl)
            .map(function (response) {
            return response.json().data;
        })
            .do(function (pro) {
            _this.logger.log(pro.length + " provinces are loaded via Http.");
        }) //Optional
            .catch(function (error) {
            return Observable_1.Observable.throw("There is an error while loading data: " + error);
        });
    };
    DataService.prototype.getCompaniesViaHttp = function () {
        var _this = this;
        return this.http.get(this.companiesUrl)
            .map(function (response) {
            return response.json().data;
        })
            .do(function (comp) {
            _this.logger.log(comp.length + " companies are loaded via Http.");
        }) //Optional
            .catch(function (error) {
            return Observable_1.Observable.throw("There is an error while loading data: " + error);
        });
    };
    DataService.prototype.getCompaniesAsync = function () {
        var _this = this;
        var companies = sample_data_1.getSampleData();
        return of_1.of(companies)
            .delay(2000)
            .do(function (c) {
            _this.logger.log(companies.length + " companies are loaded Asynchronously via Observable.");
        });
    };
    DataService.prototype.getCompanies = function () {
        var companies = sample_data_1.getSampleData();
        this.logger.log("Got " + companies.length + " companies.");
        return companies;
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [logger_service_1.LoggerService, http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map