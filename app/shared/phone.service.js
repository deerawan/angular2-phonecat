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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var PhoneService = (function () {
    function PhoneService(http) {
        this.http = http;
    }
    PhoneService.prototype.getPhones = function () {
        return this.http.get('/app/phones/phones.json')
            .map(this.extractData)
            .catch(this.handleError);
    };
    PhoneService.prototype.getPhone = function (id) {
        return this.http.get('/app/phones/' + id + '.json')
            .map(this.extractData)
            .catch(this.handleError);
    };
    PhoneService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response Status: ' + res.status);
        }
        return res.json() || {};
    };
    PhoneService.prototype.handleError = function (error) {
        var errMsg = error.message || 'server error';
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    PhoneService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PhoneService);
    return PhoneService;
}());
exports.PhoneService = PhoneService;
//# sourceMappingURL=phone.service.js.map