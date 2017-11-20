import { Component, ViewChild } from '@angular/core';
import { 
  Nav, 
  Platform, 
  ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase/app';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthProvider } from '../providers';
import { UserProvider } from '../providers';
import { IUser } from '../models';

import { filterBy } from '../helpers/helpers';

export interface PageInterface {
  title: string;
  name: string;
  class?: string;
  icon: string;
  logsOut?: boolean;
  index?: number;
  scope: Array<string>;
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
    { title: 'Editors', name: 'editors-list', class: 'EditorsListPage', index: 0, icon: 'briefcase', scope: ['admin'] },
    { title: 'Users', name: 'users-list', class: 'UsersListPage', index: 1, icon: 'contacts', scope: ['admin'] },
    { title: 'Sites', name: 'sites-list', class: 'SitesListPage', index: 2, icon: 'laptop', scope: ['admin', 'editor'] },
    { title: 'Reporting', name: 'sites-report', class: 'SitesReportPage', index: 3, icon: 'stats', scope: ['admin'] }
    //{ title: 'Campaigns', name: 'CampaignsListPage', index: 3, icon: 'pricetags' }
  ];
  loggedInPages: PageInterface[] = [
    //{ title: 'Account', name: 'AccountPage', icon: 'person' },
  ];
  linksToDisplay: PageInterface[] = [];

  rootPage: String;
  user: IUser;
  userAuth: firebase.User;
  isAdmin: boolean;
  public authState: Observable<firebase.User>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authData: AuthProvider,
    private afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public translate: TranslateService,
    public userService: UserProvider
  ) {
    translate.setDefaultLang('en');
    this.authState = afAuth.authState;
    const authObserver = this.authState.subscribe((user: firebase.User) => {
      /*
        https://javebratt.com/angularfire2-authentication-ionic/
        */
      if (user) {
        console.log('app.component/authObserver');
        console.log(user);
        this.userAuth = user;
        userService.fetchByEmail(user.email).subscribe((users) => {
          this.user = users.shift();
          console.log(this.user);
          if (this.user) {
            
            translate.setDefaultLang(this.user.preferredLanguage);
            userService.setCurrent(this.user);
            this.isAdmin = (this.user.role == 'admin');
            this.linksToDisplay = filterBy(this.appPages, "scope", this.user.role);
            this.rootPage = 'sites-list';
            //authObserver.unsubscribe();
          } else {
            this.rootPage = 'login';
            authObserver.unsubscribe();
          }
        });
      } else {
        this.rootPage = 'login';  
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
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
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

