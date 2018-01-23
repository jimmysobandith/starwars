import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

var tmpPage;

@Injectable()
export class PeopleMethod {

  constructor(public http: HttpClient) {
    console.log('Hello SwapiProvider Provider');
  }

  listPeople() {
    let request = `https://swapi.co/api/people/`;
    return this.http.get(request)
      .map((res: any) => res.results);
  }

  getPeople(idPeople) {
    
  }

}