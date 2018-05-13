import { PopoverComponent } from './../components/popover/popover';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DeviceMotion } from '@ionic-native/device-motion';
import { DeviceOrientation } from '@ionic-native/device-orientation';
import { MyApp } from './app.component';

import { ARView } from '../pages/ar-view/ar-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
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
    DeviceMotion,
    DeviceOrientation
  ]
})
export class AppModule { }
