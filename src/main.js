"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var app_routes_1 = require("./app/app.routes");
var environment_1 = require("./app/environment");
var homeComponent_1 = require("./app/homeComponent");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(homeComponent_1.HomeAppComponent, [app_routes_1.appRouterProviders, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map