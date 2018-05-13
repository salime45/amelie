import { Geolocation } from '@ionic-native/geolocation';
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
    public usuarioProvider: UsuarioProvider,
    public geolocation: Geolocation,

  ) {
    angularFireDatabase.firestore.settings({ timestampsInSnapshots: true });

  }

  guardarPosit(e: Posit) {
<<<<<<< Updated upstream

    if (e.id == '') {
      e.usuario = this.usuarioProvider.getUserId()
      e.id = e.usuario + new Date().valueOf().toString()
    }

    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {

      e.latitud = resp.coords.latitude
      e.longitud = resp.coords.longitude
      return this.angularFireDatabase.collection(this.rootPath).doc(e.id).set(Object.assign({}, e))
    })
=======
    return this.angularFireDatabase.collection(this.rootPath).doc(e.id).set(Object.assign({}, e))
>>>>>>> Stashed changes
  }

  getAllPosit() {
    return this.angularFireDatabase.collection(this.rootPath).valueChanges()
  }

}
