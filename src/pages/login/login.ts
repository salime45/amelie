import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController, MenuController } from 'ionic-angular';
//import { UsuarioProvider } from '../../providers/usuario/usuario';
//import { Usuario } from '../../models/usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //public user: Usuario = new Usuario();
  public pass = '123456'
  public form: string = "acceso";
  public code: string = "";

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    //public userProvider: UsuarioProvider,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController
  ) {
    //this.user.email = 'i@i.es'
    this.menuCtrl.enable(false);
  }

  nuevoUsuario() {
    //  let mimodal = this.modalCtrl.create('NuevoUsuarioPage');
    //  mimodal.present();
    this.signin()
  }

  login() {

    /*this.userProvider.loginUser(this.user, this.pass).then((user) => { })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })*/
  }

  signin() {
    /*this.userProvider.registerUser(this.user.email, this.pass)
      .then((user) => {
        // El usuario se ha creado correctamente
      })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })*/

  }

}
