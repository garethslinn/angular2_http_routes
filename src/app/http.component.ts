import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HttpService } from "./http.service";

@Component({
  moduleId: module.id,
  selector: 'http-app',
  templateUrl: 'http.component.html',
  providers: [HttpService],
  directives: [ROUTER_DIRECTIVES]
})
export class HttpAppComponent {
  items: any[] = [];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService) {}

  onSubmit(username: string, email: string, id: string) {
    this.httpService.sendData({username: username, email: email, id: Math.floor(Math.random() * 10) + Date.now()})
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  onGetData() {
    this.httpService.getOwnData()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
            myArray.push(data[key]);
          }
          this.items = myArray;
        }
      );
  }
}
