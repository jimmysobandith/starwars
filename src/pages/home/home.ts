import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  navController: any;
  home:any;
  

  constructor(public navCtrl: NavController) {
    

    }
    AboutUs(){
    
      this.navCtrl.push(AboutPage);

  }

}
