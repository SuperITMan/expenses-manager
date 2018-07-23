import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase/app";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {from} from "rxjs/internal/observable/from";
// import {of} from "rxjs/observable/of";

@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  logout(): void {
    console.log("AuthProvider: Logging the user out");

    const logoutObservable: Observable<any> = from(this.afAuth.auth.signOut());

    logoutObservable.pipe(
      catchError(error => {
        throw(`AuthProvider: Failed to log the user out: ${error}`)
      })
    ).subscribe(next => {
      console.log("AuthProvider: Logged the user out");
      location.reload();
    });


    /*
        logoutPromise.then(value => {
          console.log("AuthProvider: Logged the user out");

        });

        logoutPromise.catch(reason => {
          console.log("AuthProvider: Failed to log the user out: ", reason);
        });
      */
  }

  loginWithGoogle(): Observable<any> {
    return from(this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()))
  }

  loginWithFacebook(): Observable<any> {
    return from(this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()))
  }
}
