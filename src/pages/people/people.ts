import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { PeopleDetailsPage } from '../peopleDetails/peopleDetails';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  peoples: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {

  }

  openDetails(people) {
    this.navCtrl.push(PeopleDetailsPage, { people: people });
  }
}
