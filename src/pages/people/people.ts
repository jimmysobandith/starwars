import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { PeopleDetailsPage } from '../peopleDetails/peopleDetails';
import { PeopleMethod } from '../../provider/peopleMethod';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  peoples: [''];

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient, private PeopleMethod: PeopleMethod) {
    this.PeopleMethod.listPeople().subscribe(data => {
        this.peoples = data;
  });
  }

  openDetails(people) {
    this.navCtrl.push(PeopleDetailsPage, { people: people });
  }

  bouton()
  {

  }
}
