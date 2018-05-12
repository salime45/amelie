import { PopoverComponent } from './../components/popover/popover';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ARView } from '../pages/ar-view/ar-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import { ComponentsModule } from '../components/components.module';
=======
import { MapaPage } from '../pages/mapa/mapa';
>>>>>>> 9b3fb75e365470c9049d92efc3c7649d885a48f9

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ARView
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    PopoverComponent
=======
    ARView
>>>>>>> 9b3fb75e365470c9049d92efc3c7649d885a48f9
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
