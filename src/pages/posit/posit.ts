import { Posit } from './../../models/posit';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PositProvider } from '../../providers/posit/posit';

/**
 * Generated class for the PositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posit',
  templateUrl: 'posit.html',
})
export class PositPage {

  posit = new Posit();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public positProvider: PositProvider,
    public viewCtrl: ViewController,


  ) {
  }


  guardar() {

      this.positProvider.guardarPosit(this.posit)
      this.viewCtrl.dismiss();

  }

}
