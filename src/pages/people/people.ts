import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { PeopleDetailsPage } from '../peopleDetails/peopleDetails';
import { PeopleGenPage } from '../../provider/peopleGen/peopleGen';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  peoples: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {

    this.peoples = PeopleGenPage.listPeople();
  }

  openDetails(people) {
    this.navCtrl.push(PeopleDetailsPage, { people: people });
  }
}
