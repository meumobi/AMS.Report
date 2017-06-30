import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { SitesProvider } from '../providers/sites/sites';
import { EditorProvider } from '../providers/editor/editor';
import { AuthProvider } from '../providers/auth/auth';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { UserProvider } from '../providers/user/user';
import { CalendarModule } from "ion2-calendar";
import { MomentModule } from 'angular2-moment';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CalendarModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SitesProvider,
    EditorProvider,
    UserProvider,
    AuthProvider
  ]
})
export class AppModule {}
