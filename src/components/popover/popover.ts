import { Component } from '@angular/core';
import { ViewController, App } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

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
    public auth: UsuarioProvider,

  ) {
    this.pages = [
      { title: 'Salir', component: "LoginPage", icon: 'exit' },
    ];
  }

  openPage(page) {
    this.viewCtrl.dismiss();
    this.app.getRootNavs()[0].push(page.component);
    if (page.component == "LoginPage") {
      this.auth.logout();
    }
  }

}
