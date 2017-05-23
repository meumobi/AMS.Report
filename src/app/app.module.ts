import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { SitesProvider } from '../providers/sites/sites';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBML2EVs0juvq3wJsjs3gYU-qHJAEu9UiA",
  authDomain: "ams-report.firebaseapp.com",
  databaseURL: "https://ams-report.firebaseio.com",
  storageBucket: "ams-report.appspot.com",
  messagingSenderId: "832063717167"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SitesProvider
  ]
})
export class AppModule {}
