import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CalendarModule } from "ion2-calendar";
import { MomentModule } from 'angular2-moment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import { APP_INITIALIZER } 	from '@angular/core';

import { MyApp } from './app.component';
import { SitesProvider } from '../providers/sites/sites';
import { EditorProvider } from '../providers/editor/editor';
import { AuthProvider } from '../providers/auth/auth';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { UserProvider } from '../providers/user/user';
import { ItemService } from './../providers/item.service';
import { AppConfig } 		from './config/app.config'; 

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initConfig(config: AppConfig){
 return () => config.load() 
}

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
    MomentModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
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
    AuthProvider,
    ItemService,
    AppConfig,
    { 
			provide: APP_INITIALIZER, 
			useFactory: initConfig, 
			deps: [AppConfig], 
      multi: true 
    }
  ]
})
export class AppModule {}
