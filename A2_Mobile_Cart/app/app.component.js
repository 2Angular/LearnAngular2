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
var mobile_list_mobileservice_1 = require("./mobiles/mobile-list.mobileservice");
require("rxjs/Rx");
var AppComponent = (function () {
    function AppComponent() {
        this.cartTitle = 'BigB Mobiles';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'mob-app',
        template: "\n    <div>\n    <h2>{{cartTitle}}</h2>\n        <h1>Welcome to Angular2</h1>\n            <nav>\n        <a routerLink=\"/home\" routerLinkAction=\"active\"> Home</a>\n        <a routerLink=\"/mobilelist\" routerLinkAction=\"active\"> Mobile List</a>\n    </nav>    \n        <router-outlet></router-outlet>\n        </div>",
        providers: [mobile_list_mobileservice_1.MobileService]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map