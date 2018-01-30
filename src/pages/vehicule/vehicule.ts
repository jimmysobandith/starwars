import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VehiculeDetailsPage } from "../vehiculeDetails/vehiculeDetails";
import { VehiculeMethod } from '../../provider/VehiculeMethod';

@Component({
  selector: 'page-vehicule',
  templateUrl: 'vehicule.html',
})
export class VehiculePage {
  vehicules: [''];


  /* Constructeur */
  constructor(public navCtrl: NavController, public navParams: NavParams, private VehiculeMethod: VehiculeMethod) {
    this.VehiculeMethod.listVehicule().subscribe(data =>
    {
      this.vehicules = data;
    });
  }


  openDetails(vehicule) {
    this.navCtrl.push(VehiculeDetailsPage, {vehicule: vehicule});
  }


  boutonSuivantVehicule()
  {
    this.VehiculeMethod.enrSuivante();
    this.VehiculeMethod.listVehicule().subscribe(data =>
    {
      this.vehicules = data;
    });
  }

  boutonPrecedentVehicule()
  {
    this.VehiculeMethod.enrPrecedente();
    this.VehiculeMethod.listVehicule().subscribe(data =>
    {
      this.vehicules = data;
    });
  }
}
