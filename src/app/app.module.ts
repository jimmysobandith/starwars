import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { VehiculePage } from '../pages/vehicule/vehicule';
import { PeoplePage } from '../pages/people/people';
import { FilmPage } from '../pages/film/film';
import { FilmDetailsPage } from '../pages/filmDetails/filmDetails';
import { PeopleDetailsPage } from '../pages/peopleDetails/peopleDetails';
import { PeopleMethod } from '../provider/peopleMethod';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {VehiculeDetailsPage} from "../pages/vehiculeDetails/vehiculeDetails";

@NgModule({
  declarations: [
    MyApp,
    FilmPage,
    PeoplePage,
    AboutPage,
    VehiculePage,
    ContactPage,
    FilmDetailsPage,
    PeopleDetailsPage,
    VehiculeDetailsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmPage,
    AboutPage,
    VehiculePage,
    ContactPage,
    PeoplePage,
    FilmDetailsPage,
    PeopleDetailsPage,
    VehiculeDetailsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PeopleMethod,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
