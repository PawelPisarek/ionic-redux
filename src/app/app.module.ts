import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NgReduxRouterModule} from "@angular-redux/router";
import {NgReduxModule} from "@angular-redux/store";
import {StoreModule} from "../store/store.module";
import {AnimalModule} from "../animals/animal.module";
import {HttpModule} from "@angular/http";
import {LionModule} from "../lions/lion.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgReduxModule,
    NgReduxRouterModule,
    HttpModule,

    AnimalModule,
    LionModule,

    StoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
