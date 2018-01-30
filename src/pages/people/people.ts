/* 
  * TS : People 
  * Description : Affiche les personnages
  * Developpeur : SOBANDITH Jimmy, PINEAU Tristan, PICHARD Thomas, IHEELILE Zineb
*/

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PeopleDetailsPage } from '../peopleDetails/peopleDetails';
import { PeopleMethod } from '../../provider/peopleMethod';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})

export class PeoplePage {
  peoples: [''];

  /* Constructeur */
  constructor(public navCtrl: NavController, public navParams: NavParams, private PeopleMethod: PeopleMethod) {
    this.PeopleMethod.listPeople().subscribe(data => 
    {
      this.peoples = data;
    });
  }

  /* FONCTION : Ouverture du détail d'un personnage */
  openDetails(people) {
    this.navCtrl.push(PeopleDetailsPage, { people: people });
  }

  /* FONCTION : Page suivente de la liste de personnage */
  bouttonSuivent()
  {
    this.PeopleMethod.enrSuivente();
    this.PeopleMethod.listPeople().subscribe(data => 
    {
       this.peoples = data;
    });
  }

  /* FONCTION : Page précédente de la liste de personnage */
  bouttonPrecedent()
  {
    this.PeopleMethod.enrPrecedente();
    this.PeopleMethod.listPeople().subscribe(data => 
    {
       this.peoples = data;
    });
  }
}
