import { PopoverComponent } from './../../components/popover/popover';
import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

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
}
