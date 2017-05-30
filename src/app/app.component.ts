import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    //{ title: 'Users', name: 'UsersListPage', index: 1, icon: 'contacts' },
    { title: 'Sites', name: 'sites-list', class: 'SitesListPage', index: 2, icon: 'laptop' }
    //{ title: 'Campaigns', name: 'CampaignsListPage', index: 3, icon: 'pricetags' }
  ];
  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', icon: 'person' },
    { title: 'Support', name: 'SupportPage', icon: 'help' },
    { title: 'Logout', name: 'TabsPage', icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', icon: 'log-in' },
    { title: 'Support', name: 'SupportPage', icon: 'help' }
  ];

  rootPage:string = 'EditorsListPage';

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {

    this.platformReady()
  }

  platformReady() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    this.nav.setRoot(page.name);
  }

  openNewsFeed() {
    this.nav.setRoot('NewsFeedPage');
  }

  isActive(page: PageInterface) {
    if (this.nav.getActive() && page.class && this.nav.getActive().name === page.class) {
      return 'primary';
    }
    return;
  }
}

