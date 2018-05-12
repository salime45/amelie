import { PopoverComponent } from './../components/popover/popover';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';

import { ARView } from '../pages/ar-view/ar-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { MapaPage } from '../pages/mapa/mapa';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { PositProvider } from '../providers/posit/posit';
import { FirebaseModule } from './firebase.module';
import { ProvidersModule } from '../providers/providers.module';

@NgModule({
  declarations: [
    MyApp,
    ARView
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    FirebaseModule,
    ProvidersModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverComponent,
    ARView
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
  ]
})
export class AppModule { }
