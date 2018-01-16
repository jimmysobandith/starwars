import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { VehiculeDetailsPage } from "../vehiculeDetails/vehiculeDetails";

@Component({
  selector: 'page-vehicule',
  templateUrl: 'vehicule.html',
})
export class VehiculePage {
  vehicules: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
    this.vehicules = this.httpClient.get('https://swapi.co/api/vehicles');
  }
  openDetails(vehicule) {
    this.navCtrl.push(VehiculeDetailsPage, {vehicule: vehicule});
  }
}
