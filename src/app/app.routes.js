"use strict";
var router_1 = require('@angular/router');
var http_component_1 = require("./http.component");
var homeComponent_1 = require("./homeComponent");
var pageNotFoundComponent_1 = require("./pageNotFoundComponent");
var IssuesAppComponent_1 = require("./IssuesAppComponent");
var routes = [
    { path: 'home', component: homeComponent_1.HomeAppComponent },
    { path: 'users', component: http_component_1.HttpAppComponent },
    { path: 'issues', component: IssuesAppComponent_1.IssuesAppComponent },
    { path: '**', component: pageNotFoundComponent_1.PageNotFoundComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map