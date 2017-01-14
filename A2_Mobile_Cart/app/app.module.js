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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var mobile_list_component_1 = require("./mobiles/mobile-list.component");
var rating_component_1 = require("./shared/rating.component");
var mobile_mobilepipe_1 = require("./mobiles/mobile-mobilepipe");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var mobile_detail_component_1 = require("./mobiles/mobile-detail.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'mobilelist', component: mobile_list_component_1.MobileListComponent },
    { path: 'app', component: app_component_1.AppComponent },
    { path: 'mobiledetail/:id', component: mobile_detail_component_1.MobileDetailComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, mobile_list_component_1.MobileListComponent, mobile_mobilepipe_1.MobileFilterPipe, rating_component_1.RatingComponent, home_component_1.HomeComponent, mobile_detail_component_1.MobileDetailComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map