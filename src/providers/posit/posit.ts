import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posit } from '../../models/posit';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the PositProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PositProvider {

  private rootPath = "/posit/"

  constructor(public angularFireDatabase: AngularFirestore,) {
  }

  guardarPosit(e: Posit) {  
    return this.angularFireDatabase.collection(this.rootPath).doc(e.id).set(Object.assign({}, e))
  }

}
