import { Component, ViewChild } from '@angular/core';
import { 
  Nav, 
  Platform, 
  MenuController,
  ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { TranslateService } from '@ngx-translate/core';

import { AuthProvider } from '../providers';

export interface PageInterface {
  title: string;
  name: string;
  class?: string;
  icon: string;
  logsOut?: boolean;
  index?: number;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    { title: 'Editors', name: 'editors-list', class: 'EditorsListPage', index: 0, icon: 'briefcase' },
    { title: 'Users', name: 'users-list', class: 'UsersListPage', index: 1, icon: 'contacts' },
    { title: 'Sites', name: 'sites-list', class: 'SitesListPage', index: 2, icon: 'laptop' },
    { title: 'Reporting', name: 'sites-report', class: 'SitesReportPage', index: 3, icon: 'stats' }
    //{ title: 'Campaigns', name: 'CampaignsListPage', index: 3, icon: 'pricetags' }
  ];
  loggedInPages: PageInterface[] = [
    //{ title: 'Account', name: 'AccountPage', icon: 'person' },
  ];

  rootPage: String;
  user: firebase.User;
  public authState: Observable<firebase.User>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    private afAuth: AngularFireAuth,
    public authData: AuthProvider,
    public toastCtrl: ToastController,
    public translate: TranslateService
  ) {
    translate.setDefaultLang('fr');
    this.authState = this.afAuth.authState;

    this.authState = afAuth.authState;
    this.authState.subscribe((user: firebase.User) => {
      if (user) {
        console.log('authState change');
        console.log(user);
        this.user = user;
        this.rootPage = 'sites-list';
        /*
        TODO: I don't understand the use or not of unsubscribe
        https://javebratt.com/angularfire2-authentication-ionic/
        */
        //authObserver.unsubscribe();
      } else {
        this.rootPage = 'login';
        //authObserver.unsubscribe();
        //this.isAuthenticated = false;
      }
    });

    this.platformReady()
  }

  isAuthenticated() {
    return !!this.user;
  }

  platformReady() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: String) {
    this.nav.setRoot(page);
  }

  logout() {
    this.authData.logoutUser()
    .then( authData => {
      this.nav.setRoot('login');
    }, error => {
      console.log(error.message);
    });
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  resetPassword() {
    this.authData.resetPassword(this.user.email)
    .then( () => {
      this.translate.get('Email sent successfully').subscribe((res: string) => {
        this.presentToast(res);
      });
    }, error => {
      console.log(error.message);
    });
  }

  isActive(page: PageInterface) {
    if (this.nav.getActive() && page.class && this.nav.getActive().name === page.class) {
      return 'primary';
    }
    return;
  }
}

