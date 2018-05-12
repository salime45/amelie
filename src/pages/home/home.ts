<<<<<<< HEAD
import { PopoverComponent } from './../../components/popover/popover';
=======
import { ARView } from './../ar-view/ar-view';
>>>>>>> 9b3fb75e365470c9049d92efc3c7649d885a48f9
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

  openAR(){
    this.navCtrl.push(ARView)
  }
}
