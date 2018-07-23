import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {AuthProvider} from "../providers/auth/auth";
import {User} from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {HomePage} from "../pages/home/home";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen,
              private afAuth: AngularFireAuth, private authProvider: AuthProvider) {
    this.initializeApp();
    console.log("Initialized");

    const subscription = this.afAuth.authState.subscribe((user: User) => {
      if (!user) {
        console.log("Anonymous user");
        this.rootPage = LoginPage;
      } else {
        console.log("Authenticated user");
        this.rootPage = TabsPage;
      }
      subscription.unsubscribe(); // got it, no need to listen anymore
    });
  }

  initializeApp() {
    console.log("Initializing app");
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.authProvider.logout()
  }
}
