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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var phone_service_1 = require('./shared/phone.service');
var phone_list_component_1 = require('./phone-list/phone-list.component');
var phone_detail_component_1 = require('./phone-detail/phone-detail.component');
var toolbar_1 = require('@angular2-material/toolbar');
var Angular2PhonecatAppComponent = (function () {
    function Angular2PhonecatAppComponent(phoneService, router) {
        this.phoneService = phoneService;
        this.router = router;
        this.title = 'Angular 2 PhoneCat';
    }
    Angular2PhonecatAppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/phones']);
    };
    Angular2PhonecatAppComponent = __decorate([
        router_1.Routes([
            { path: '/phones', component: phone_list_component_1.PhoneListComponent },
            { path: '/phone/:id', component: phone_detail_component_1.PhoneDetailComponent }
        ]),
        core_1.Component({
            moduleId: module.id,
            selector: 'angular2-phonecat-app',
            templateUrl: 'angular2-phonecat.component.html',
            styleUrls: ['angular2-phonecat.component.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                toolbar_1.MD_TOOLBAR_DIRECTIVES
            ],
            providers: [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                phone_service_1.PhoneService
            ]
        }), 
        __metadata('design:paramtypes', [phone_service_1.PhoneService, router_1.Router])
    ], Angular2PhonecatAppComponent);
    return Angular2PhonecatAppComponent;
}());
exports.Angular2PhonecatAppComponent = Angular2PhonecatAppComponent;
//# sourceMappingURL=angular2-phonecat.component.js.map