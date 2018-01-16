import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { VehiculePage } from '../pages/vehicule/vehicule';
import { PeoplePage } from '../pages/people/people';
import { FilmPage } from '../pages/film/film';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FilmPage,
    PeoplePage,
    VehiculePage,
    HomePage,
    VehiculePage,
    PeoplePage,
    FilmPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmPage,
    VehiculePage,
    PeoplePage,
    HomePage,
    VehiculePage,
    PeoplePage,
    FilmPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
