import { provideRouter, RouterConfig } from '@angular/router';

import {HttpAppComponent} from "./http.component";
import {HomeAppComponent} from "./homeComponent";
import {PageNotFoundComponent} from "./pageNotFoundComponent";
import {IssuesAppComponent} from "./IssuesAppComponent";

const routes: RouterConfig = [
  { path: 'home', component: HomeAppComponent },
  { path: 'users', component: HttpAppComponent },
  { path: 'issues', component: IssuesAppComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
