"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var company_list_component_1 = require("./company-list.component");
var company_detail_component_1 = require("./company-detail.component");
var address_component_1 = require("./address.component");
var data_service_1 = require("./services/data.service");
var logger_service_1 = require("./services/logger.service");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./services/in-memory-data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMoemoryDataService)],
        declarations: [app_component_1.AppComponent, company_list_component_1.CompanyListComponent, company_detail_component_1.CompanyDetailComponent, address_component_1.AddressComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [data_service_1.DataService, logger_service_1.LoggerService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map