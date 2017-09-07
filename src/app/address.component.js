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
var address_1 = require("./models/address");
var data_service_1 = require("./services/data.service");
var logger_service_1 = require("./services/logger.service");
var AddressComponent = (function () {
    function AddressComponent(dataService, logger) {
        this.dataService = dataService;
        this.logger = logger;
        this.provinces = [];
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.getProvinces();
    };
    AddressComponent.prototype.getProvinces = function () {
        var _this = this;
        this.dataService.getProvincesViahttp().subscribe(function (p) {
            _this.provinces = p;
        }, function (error) {
            _this.logger.log(error);
        });
    };
    return AddressComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", address_1.Address)
], AddressComponent.prototype, "address", void 0);
AddressComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'address',
        templateUrl: 'address.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, logger_service_1.LoggerService])
], AddressComponent);
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map