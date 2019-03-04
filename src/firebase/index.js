import app from 'firebase/app';
import 'firebase/auth';
import config from './config';

class Firebase {
  constructor() {
    app.initializeApp(config);
    console.log(config);
    this.auth = app.auth();
  }

  // Auth API

  // Email and password
  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  signOut = () => this.auth.signOut();
}

export default Firebase;
