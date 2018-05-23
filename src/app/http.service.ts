import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  users: any = [];

  // subject = new BehaviorSubject([]);

  constructor(private _http: HttpClient ) {  }

  // retrieveUsers() {
  //   this._http.get('https://5983617334e4a300116fea9f.mockapi.io/tasks')
  //   .subscribe(
  //     (response) => {
  //       console.log('Success! ', response);
  //       // this.users = response;
  //       this.subject.next(response);
  //     },
  //     (error) => { console.log('Error! ', error) }
  //   );
  // }

  retrieveUsers() {
    console.log('HttpService > retrieveUsers');
    return this._http.get('https://5983617334e4a300116fea9f.mockapi.io/tasks');
  }



}
