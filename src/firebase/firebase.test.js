import Firebase from './index';

const firebase = new Firebase();
const storageRef = firebase.storage.ref();

it('Sign up user via Email', async done => {
  const email = `${Date.now().toString()}@gmail.com`;
  const pass = '123456';
  await firebase
    .createUserWithEmailAndPassword(email, pass)
    .then(() => done())
    .catch(done.fail);
});

it('Upload smth to storage', async done => {
  const testMessage = 'Test message';

  await storageRef
    .child('testUpload.txt')
    .putString(testMessage)
    .then(() => done())
    .catch(done.fail);
});