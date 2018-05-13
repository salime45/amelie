import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController, MenuController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
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
 
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public userProvider: UsuarioProvider,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController
  ) {
   
  } 

  login() { 
      this.userProvider.loginUser("vvalladolid@isvisoft.com", "prueba")
        .then((user) => { })
        .catch(err => {
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Sus datos no son correctos, por favor reviselos.',
            buttons: ['Aceptar']
          });
          alert.present();
        })
   }  
}