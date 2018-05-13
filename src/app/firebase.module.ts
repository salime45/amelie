import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyA_d7hkE1diVprgMnpxA5viQ1BAz-MIzU4",
  authDomain: "amelie-f3e7f.firebaseapp.com",
  databaseURL: "https://amelie-f3e7f.firebaseio.com",
  projectId: "amelie-f3e7f",
  storageBucket: "amelie-f3e7f.appspot.com",
  messagingSenderId: "482502125421"
};
@NgModule({
  declarations: [
 
  ],
  imports: [
    IonicModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  entryComponents: [
   
  ],
  exports: [
  ]
})
export class FirebaseModule { }
