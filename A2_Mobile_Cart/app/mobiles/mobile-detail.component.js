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
var router_1 = require("@angular/router");
var MobileDetailComponent = (function () {
    function MobileDetailComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.mobiles = [
            {
                "msId": 1,
                "name": "Motorola",
                "model": "MG",
                "releaseDate": "March 19, 2016",
                "description": "Motorola Rocks.",
                "price": 10000,
                "rating": 3.2,
                "image": "motorola-moto-m-.jpeg"
            },
            {
                "msId": 2,
                "name": "Lenovo",
                "model": "K6 Power",
                "releaseDate": "March 18, 2016",
                "description": "Lenova Super",
                "price": 20000,
                "rating": 4.2,
                "image": "lenovo-k6-power.jpeg"
            },
            {
                "msId": 3,
                "name": "Nokia",
                "model": "520",
                "releaseDate": "May 21, 2016",
                "description": "Now Managed by Microsoft",
                "price": 15000,
                "rating": 4.8,
                "image": "nokia.jpg"
            },
            {
                "msId": 4,
                "name": "Letv",
                "model": "max2",
                "releaseDate": "May 15, 2016",
                "description": "Best Economical Phone",
                "price": 7500,
                "rating": 3.7,
                "image": "leeco.jpg"
            }
        ];
        this.route.params.subscribe(function (params) { _this.mobileid = params['id']; _this.mobile = _this.mobiles.find(_this.findMobile, [_this.mobileid]); });
    }
    MobileDetailComponent.prototype.navigateBack = function () {
        this.router.navigate(['./mobilelist']);
    };
    MobileDetailComponent.prototype.findMobile = function (element) {
        return element.msId == +this[0];
    };
    return MobileDetailComponent;
}());
MobileDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/mobiles/mobile-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], MobileDetailComponent);
exports.MobileDetailComponent = MobileDetailComponent;
//# sourceMappingURL=mobile-detail.component.js.map