/* 
  * TS : Détail personnage 
  * Description : Affiche le détail d'un personnage
  * Developpeur : SOBANDITH Jimmy, PINEAU Tristan, PICHARD Thomas, IHEELILE Zineb
*/

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-people-details',
  templateUrl: 'peopleDetails.html',
})

export class PeopleDetailsPage {
  people: any;
 
  /* CONSTRUCTEUR */
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.people = this.navParams.data.people;
  }
}