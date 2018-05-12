import { PositProvider } from './posit/posit';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { UsuarioProvider } from './usuario/usuario';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';





@NgModule({
  declarations: [

  ],
  imports: [
    IonicModule,
    IonicStorageModule.forRoot(),

  ],
  entryComponents: [
  ],
  exports: [
  ],
  providers: [
    UsuarioProvider,
    PositProvider,
    AngularFireDatabase

  ]
})
export class ProvidersModule { }
