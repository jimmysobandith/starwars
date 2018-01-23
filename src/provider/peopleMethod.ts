import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-people-details',
})
export class PeopleMethod {
  people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.people = this.navParams.data.vehicule;
  }
}
