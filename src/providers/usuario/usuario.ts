import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage'
import * as firebase from 'firebase';


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  authState: any = null;


  public EXP_NUEVO_COMENTARIO: number = 2
  public EXP_NUEVO_COMENTARIO_WITH_PHOTO: number = 3
  public EXP_NUEVO_HILO: number = 3
  public EXP_NUEVO_ANUNCIO: number = 3
  public EXP_NUEVO_COCHE: number = 2
  public EXP_NUEVO_EVENTO: number = 3

  public NIVEL_RELATIVO: number = 1


  

  // private usuario: Usuario;
  private googleProvider;

  constructor(
    public angularFireDatabase: AngularFirestore,
    private afAuth: AngularFireAuth,
    private storage: Storage,
    private db: AngularFireDatabase,

  ) {
    this.googleProvider = new firebase.auth.GoogleAuthProvider(); 
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
  /*loginUser(u: string, pass: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(u.email, pass)
      .then(user => {
        Promise.resolve(user);        
      })
      .catch(err => Promise.reject(err))
  }*/

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
          this.authState = credential.user
          this.updateUserData()
      })
      .catch(error => console.log(error));
  }



  // Logout de usuario
  logout() {
    this.afAuth.auth.signOut();
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
    //return this.angularFireDatabase.collection(this.rootPath).doc(id).valueChanges()

  } 

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }
  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  //// Helpers ////
  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
      let path = `users/${this.currentUserId}`; // Endpoint on firebase
      let data = {
                    email: this.authState.email,
                    name: this.authState.displayName
                  }
  
      this.db.object(path).update(data)
      .catch(error => console.log(error));
  
    }

 
}
