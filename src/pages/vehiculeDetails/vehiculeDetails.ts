import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-vehicule-details',
  templateUrl: 'vehiculeDetails.html',
})
export class VehiculeDetailsPage {
  vehicule: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vehicule = this.navParams.data.vehicule;
  }
}
