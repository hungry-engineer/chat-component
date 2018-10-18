import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class AuthService {
  // public user: Observable<firebase.User>;
  // public user: firebase.User;
  public user: any;
  private token: string;
  obsLoggedUser: BehaviorSubject<any>;
  obsToken: BehaviorSubject<string>;

  constructor(
    private firebaseAuth: AngularFireAuth
  ) {
    // this.user = firebaseAuth.authState;
    this.obsLoggedUser = new BehaviorSubject<any>(null);
    this.obsToken = new BehaviorSubject<string>(null);
  }

  getCurrentUser() {
    const that = this;
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        console.log('PASSO OFFLINE AL CHAT MANAGER');
        that.obsLoggedUser.next(null);
      } else {
        console.log('1 - user OK ***', that.obsLoggedUser);
        that.user = firebase.auth().currentUser;
        that.obsLoggedUser.next(that.user);
        that.setToken();
      }
    });
  }

  setToken() {
    // console.log('Notification permission granted.');
    const that = this;
    firebase.auth().currentUser.getIdToken(true)/* forceRefresh */
    .then(function(idToken) {
        that.token = idToken;
        that.obsToken.next(idToken);
        console.log('******************** ---------------> idToken.', idToken);
    }).catch(function(error) {
        console.error('idToken ERROR: ', error);
        that.obsToken.next(null);
    });
  }

  getToken() {
    return this.token;
  }


  authenticateFirebaseAnonymously() {
    const that = this;
    firebase.auth().signInAnonymously()
    .then(function(user) {
      that.user = user;
      that.obsLoggedUser.next(user);
      that.setToken();
    })
    .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        that.obsLoggedUser.next(null);
        console.log('signInAnonymously ERROR: ', errorCode, errorMessage);
    });
  }


  logout() {
    return this.firebaseAuth
      .auth
      .signOut();
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout2() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
