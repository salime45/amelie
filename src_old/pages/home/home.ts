import { ARView } from './../ar-view/ar-view';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  openMap(){
    this.navCtrl.push('MapaPage')
  }

  openAr(){
    this.navCtrl.push(ARView)
  }
}
