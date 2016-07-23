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
var phone_service_1 = require('../shared/phone.service');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var PhoneListComponent = (function () {
    function PhoneListComponent(phoneService, router) {
        this.phoneService = phoneService;
        this.router = router;
        this.query = '';
        this.orderProp = 'age';
    }
    PhoneListComponent.prototype.ngOnInit = function () {
        this.getPhones();
    };
    PhoneListComponent.prototype.getPhones = function () {
        var _this = this;
        this.phoneService.getPhones()
            .subscribe(function (phones) { return _this.phones = _this.filteredPhones = phones; }, function (error) { return _this.errorMessage = error; });
    };
    PhoneListComponent.prototype.goToDetail = function (phone) {
        var link = ['/phone', phone.id];
        this.router.navigate(link);
    };
    PhoneListComponent.prototype.searchPhone = function () {
        var newFilteredPhones = [];
        var queryText = this.query.toLowerCase();
        var isFound = false;
        this.phones.forEach(function (phone) {
            isFound = phone.name.toLowerCase().indexOf(queryText) > -1 ||
                phone.snippet.toLowerCase().indexOf(queryText) > -1;
            if (isFound) {
                newFilteredPhones.push(phone);
            }
            ;
        });
        this.filteredPhones = newFilteredPhones;
    };
    PhoneListComponent.prototype.sortPhone = function (selectEvent) {
        var newOrderProp = selectEvent.target.value;
        this.orderProp = newOrderProp;
        var newSortedPhones = this.phones.sort(function (phone1, phone2) {
            if (phone1[newOrderProp] < phone2[newOrderProp]) {
                return -1;
            }
            if (phone1[newOrderProp] > phone2[newOrderProp]) {
                return 1;
            }
            return 0;
        });
        this.filteredPhones = newSortedPhones;
    };
    PhoneListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'phone-list',
            templateUrl: 'phone-list.component.html',
            styleUrls: ['phone-list.component.css'],
            directives: [
                card_1.MD_CARD_DIRECTIVES,
                input_1.MD_INPUT_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [phone_service_1.PhoneService, router_1.Router])
    ], PhoneListComponent);
    return PhoneListComponent;
}());
exports.PhoneListComponent = PhoneListComponent;
//# sourceMappingURL=phone-list.component.js.map