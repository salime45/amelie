import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage'

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  public rootPath = "/usuarios/"

  public EXP_NUEVO_COMENTARIO: number = 2
  public EXP_NUEVO_COMENTARIO_WITH_PHOTO: number = 3
  public EXP_NUEVO_HILO: number = 3
  public EXP_NUEVO_ANUNCIO: number = 3
  public EXP_NUEVO_COCHE: number = 2
  public EXP_NUEVO_EVENTO: number = 3

  public NIVEL_RELATIVO: number = 1


  

  // private usuario: Usuario;

  constructor(
    public angularFireDatabase: AngularFirestore,
    private afAuth: AngularFireAuth,
    private storage: Storage,

  ) {
  }

  

  updateToken(token: string) {

    this.angularFireDatabase.collection(this.rootPath).doc(this.getUserId()).update({
      token: token
    })
  }

  restoresPass(email) {

    return this.afAuth.auth.sendPasswordResetEmail(email).then((res) => {
      //Faltara notificar
    }).catch(err => Promise.reject(err))
  }

  // Registro de usuario
  registerUser(email: string, pass: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then((res) => {
        return Promise.resolve(res.G)
      })
      .catch(err => Promise.reject(err))
  }

  //  // Login de usuario
  /*loginUser(u: , pass: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(u.email, pass)
      .then(user => {
        Promise.resolve(user);        
      })
      .catch(err => Promise.reject(err))
  }*/

  // Logout de usuario
  logout() {
    this.afAuth.auth.signOut().then(() => {
      // hemos salido
      console.log("Cerrada la sesión")
    })
  }

  // Devuelve la session
  get Session() {
    return this.afAuth.authState;
  }
  
  // Obtenemos el id de usuario.
  getUserId() {
    return this.afAuth.auth.currentUser.uid;
  }

  getCurrentUser() {
    return this.getUser(this.getUserId())
  }

  getUser(id: string) {
    return this.angularFireDatabase.collection(this.rootPath).doc(id).valueChanges()

  } 

 
}
