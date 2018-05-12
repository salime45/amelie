import { Component } from '@angular/core';
import { ViewController, App } from 'ionic-angular';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  pages: Array<{ title: string, component: any, icon: string }>

  constructor(
    public viewCtrl: ViewController,
    public app: App,
  ) {
    this.pages = [
      { title: 'Salir', component: "LoginPage", icon: 'exit' },
    ];
  }

  openPage(page) {
    this.viewCtrl.dismiss();
    this.app.getRootNavs()[0].push(page.component);
    if (page.component == "LoginPage") {
      //this.auth.logout();
    }
  }

}
