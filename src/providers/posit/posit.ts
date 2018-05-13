import { UsuarioProvider } from './../usuario/usuario';
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

  constructor(
    public angularFireDatabase: AngularFirestore,
    public usuarioProvider: UsuarioProvider
  ) {
    angularFireDatabase.firestore.settings({ timestampsInSnapshots: true });

  }

  guardarPosit(e: Posit) {

    if (e.id == '') {
      e.usuario = this.usuarioProvider.getUserId()
      e.id = e.usuario + new Date().valueOf().toString()
    }
    return this.angularFireDatabase.collection(this.rootPath).doc(e.id).set(Object.assign({}, e))
  }

}
