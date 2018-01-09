import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { FilmDetailsPage } from '../filmDetails/filmDetails';
 
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {
  films: Observable<any>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) { 
    this.films = this.httpClient.get('https://swapi.co/api/films');  
  }
 
  openDetails(film) {
    this.navCtrl.push(FilmDetailsPage, {film: film});
  }
}