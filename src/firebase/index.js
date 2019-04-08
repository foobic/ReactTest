import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import config from './config';
import FirebaseContext from './context';

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.auth = app.auth();
    this.storage = app.storage();
  }

  // Auth API

  // Email and password
  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  // doSignInWithGoogle = () => this.auth.signInWithRedirect(this.googleProvider);

  signOut = () => this.auth.signOut();
}

export { Firebase, FirebaseContext };
