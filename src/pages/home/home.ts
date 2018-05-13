import { PopoverComponent } from './../../components/popover/popover';
import { ARView } from './../ar-view/ar-view';
import { Component } from '@angular/core';
import { NavController, PopoverController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  public popoverCtrl: PopoverController) {

  }


  optionsPopover(event) {
    let popover = this.popoverCtrl.create(PopoverComponent)
    popover.present({
      ev: event
    });
  }

  openMap(){
    this.navCtrl.push('MapaPage')
  }

  openAR(){
    this.navCtrl.push(ARView)
  }
}
