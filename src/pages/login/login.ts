import {Component} from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {map} from "rxjs/operators";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loadingIndicator: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private loadingCtrl: LoadingController) {
    this.loadingIndicator = this.loadingCtrl.create({});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginWithGoogle() {
    this.loadingIndicator.present();
    const subscription = this.authProvider.loginWithGoogle().pipe(
      map(value => {
        console.log("Signed in successfully using Google");
        this.loadingIndicator.dismissAll();
        subscription.unsubscribe();
      })
    ).subscribe();
  }

  loginWithFacebook() {
    this.loadingIndicator.present();
    const subscription = this.authProvider.loginWithFacebook().pipe(
      map(value => {
        console.log("Signed in successfully using Facebook");
        this.loadingIndicator.dismissAll();
        subscription.unsubscribe();
      })
    ).subscribe();
  }
}
