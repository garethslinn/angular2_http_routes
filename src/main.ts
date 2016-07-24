import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";

import {appRouterProviders} from "./app/app.routes";

import {environment} from "./app/environment";
import {HomeAppComponent} from "./app/homeComponent";


if (environment.production) {
  enableProdMode();
}

bootstrap(HomeAppComponent, [appRouterProviders, HTTP_PROVIDERS]);

