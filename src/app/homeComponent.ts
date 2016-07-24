import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'http-app',
  directives: [ROUTER_DIRECTIVES],
  template:`
  <h1>Component Router</h1>
  <nav>
    <a routerLink="/home" routerLinkActive="active">Home</a>
    <a routerLink="/users" routerLinkActive="active">Users</a>
    <a routerLink="/issues" routerLinkActive="active">Issues</a>
    </nav>
    <router-outlet></router-outlet>
    `
})


export class HomeAppComponent {

}


