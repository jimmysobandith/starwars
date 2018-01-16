import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-people-details',
  templateUrl: 'peopleDetails.html',
})
export class PeopleDetailsPage {
  film: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.data.film;
  }
}