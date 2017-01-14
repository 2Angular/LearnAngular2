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
var mobile_list_mobileservice_1 = require("./mobile-list.mobileservice");
var MobileListComponent = (function () {
    function MobileListComponent(_mobileService) {
        this._mobileService = _mobileService;
        this.pageTitle = "Mobiles you should not miss";
        this.imageUrl = "app/assets/images/";
        this.showImages = true;
        this.refineMobile = "";
    }
    // mobiles: IMobile [] = this._mobileService.getMobileList() ;
    MobileListComponent.prototype.displayMobiles = function () {
        console.log('control the visibility of the images here');
        (this.showImages == true) ? this.showImages = false : this.showImages = true;
    };
    MobileListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('inside the component initialization');
        this._mobileService.getMobileList().subscribe(function (response) { _this.mobiles = response.json(); });
    };
    MobileListComponent.prototype.mobileRatingClicked = function (message) {
        console.log(message);
    };
    return MobileListComponent;
}());
MobileListComponent = __decorate([
    core_1.Component({
        selector: 'mob-mobiles',
        templateUrl: 'app/mobiles/mobile-list.component.html',
        styles: ['img[src]{height:75px;width:75px;}'],
        styleUrls: ['app/mobiles/mobile-list.component.css'],
    }),
    __metadata("design:paramtypes", [mobile_list_mobileservice_1.MobileService])
], MobileListComponent);
exports.MobileListComponent = MobileListComponent;
//# sourceMappingURL=mobile-list.component.js.map