import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { FilmPage} from "../film/film";
import { PeoplePage} from "../people/people";
import { VehiculePage} from "../vehicule/vehicule";

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilmPage;
  tab3Root = PeoplePage;
  tab4Root = VehiculePage;

  constructor() {

  }
}
