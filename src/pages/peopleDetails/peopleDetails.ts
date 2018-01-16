import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-people-details',
  templateUrl: 'peopleDetails.html',
})
export class PeopleDetailsPage {
  people: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.people = this.navParams.data.people;
  }
}