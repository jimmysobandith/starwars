import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleGenPage {

  constructor(public httpClient: HttpClient) {
    console.log('Hello SwapiProvider Provider');
  }

  listPeople() {
    var tab = this.httpClient.get('https://swapi.co/api/people');
    tab.subscribe(data => {
      return data.results;
    });
  }

  getPeople(idPeople) {

  }

}