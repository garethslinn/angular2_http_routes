"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_service_1 = require("./http.service");
var HttpAppComponent = (function () {
    function HttpAppComponent(httpService) {
        this.httpService = httpService;
        this.items = [];
        this.asyncString = this.httpService.getData();
    }
    HttpAppComponent.prototype.onSubmit = function (username, email, id) {
        this.httpService.sendData({ username: username, email: email, id: Math.floor(Math.random() * 10) + Date.now() })
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    HttpAppComponent.prototype.onGetData = function () {
        var _this = this;
        this.httpService.getOwnData()
            .subscribe(function (data) {
            var myArray = [];
            for (var key in data) {
                myArray.push(data[key]);
            }
            _this.items = myArray;
        });
    };
    HttpAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'http-app',
            templateUrl: 'http.component.html',
            providers: [http_service_1.HttpService],
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], HttpAppComponent);
    return HttpAppComponent;
}());
exports.HttpAppComponent = HttpAppComponent;
//# sourceMappingURL=http.component.js.map