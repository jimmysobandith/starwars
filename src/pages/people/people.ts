import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { PeopleDetailsPage } from '../peopleDetails/peopleDetails';
 
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  peoples: Observable<any>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) { 

    
    if(this.httpClient.get('https://swapi.co/api/peoples'))
    {
      this.peoples = this.httpClient.get('https://swapi.co/api/people');
    }
    else{
      console.log("Erreur, aucun contenu");
    }
      
  }

  openDetails(people) {
    this.navCtrl.push(PeopleDetailsPage, {people: people});
  }
}
