import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  personnages: Observable<any>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) { 
    this.personnages = this.httpClient.get('https://swapi.co/api/people');  
  }
}
