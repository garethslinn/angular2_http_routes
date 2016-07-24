import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'http-app',
  template: `<h1>Page not found</h1>
   <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class PageNotFoundComponent {

}
