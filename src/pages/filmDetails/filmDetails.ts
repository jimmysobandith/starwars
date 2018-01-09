import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-film-details',
  templateUrl: 'filmDetails.html',
})
export class FilmDetailsPage {
  film: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.data.film;
  }
}