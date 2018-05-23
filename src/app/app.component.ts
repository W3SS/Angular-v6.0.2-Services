import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any = [];

  constructor(private _httpService: HttpService) {
    // this._httpService.subject.subscribe(
    //   (users) => {
    //     this.users = users;
    //   }
    // );
  }

  // retrieveUsers() {
  //   this._httpService.retrieveUsers();
  // }


  retrieveUsers() {

    console.log('AppComponent > retrieveUsers');
    this._httpService.retrieveUsers()
    .subscribe(
      (response) => {
        console.log('Success! ', response);
        this.users = response;
      },
      (error) => {
        console.log('Error! ', error);
      }
    );

  }




}
