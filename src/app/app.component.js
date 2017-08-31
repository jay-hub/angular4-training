"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Tiqri';
        this.street = '201, James Peiris Mawatha';
        this.city = 'Colombo';
        this.province = 'Western';
        this.showAddress = true;
        this.image = 'favicon.ico';
        this.color = 'Green';
    }
    AppComponent.prototype.toggleAddress = function () {
        this.showAddress = !this.showAddress;
    };
    AppComponent.prototype.toggleColor = function () {
        this.color = this.color === 'Green' ? 'Red' : 'Green';
    };
    AppComponent.prototype.changeColor = function (color) {
        this.color = color;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>Hello {{name}}</h1>\n\n    <p>{{name}} is at {{street}} in the {{city}} in {{province}} province.</p>\n\n    <input [value]=\"name\" (input)=\"name = $event.target.value\" /> <br> <br>\n    <input [value]=\"name\" (keyup)=\"name = $event.target.value\" /> <br> <br>\n    <input [value]=\"name\" (blur)=\"name = $event.target.value\" (keyup.Enter)=\"name = $event.target.value\" /> <br> <br>\n\n    <input [(ngModel)]=\"name\" /> <br> <br>\n\n    <input [ngModel]=\"name\" (ngModelChange)=\"name = $event\" /> <br> <br>\n\n    <label><input type=\"checkbox\" [(ngModel)]=\"showAddress\"/> Show Address</label> <br> <br>\n\n    <button (click)=\"toggleAddress()\">Show/Hide Address</button> <br>\n\n    <div [hidden]=\"!showAddress\">\n      <fieldset>\n        <label>Street: {{street}}</label>\n      </fieldset>\n      <fieldset>\n      <label>City: {{city}}</label>\n      </fieldset>\n      <fieldset>\n      <label>Province: {{province}}</label>\n      </fieldset>\n    </div>\n    \n\n    <!--<select #selector (change)=\"changeColor(selector.value)\">\n      <option>Green</option>\n      <option>Red</option>\n      <option>Blue</option>\n    </select>\n\n    <br>\n    <br>\n\n    <select (change)=\"changeColor($event.target.value)\">\n      <option>Green</option>\n      <option>Red</option>\n      <option>Blue</option>\n    </select>-->\n\n\n    ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map