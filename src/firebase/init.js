import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const db = firebase.firestore();
const { auth } = firebase;

export { db, auth };
