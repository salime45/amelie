import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var H: any;

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  mylocation: any;
  accX: any;
  accY: any;
  accZ: any;
  compass: any;

  hereApi = new H.service.Platform({
    'app_id': 'HSe7Gsf76oZd6cACoWLj',
    'app_code': 'tPLqU-N7_Nx2NxVN_RpBlQ'
  });

  maptypes = this.hereApi.createDefaultLayers();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private geolocation: Geolocation,
              public platform: Platform,
              private deviceOrientation: DeviceOrientation,
              private deviceMotion: DeviceMotion
              ) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {


    var map = new H.Map(
      document.getElementById('map_canvas'),
      this.maptypes.normal.map,
      {
        zoom: 12,
        center: {lng: -0.376989, lat: 39.469836}
      });
    this.mylocation = new H.map.Marker({lat: resp.coords.latitude, lng: resp.coords.longitude});
    map.addObject(this.mylocation);

    new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    H.ui.UI.createDefault(map, this.maptypes);

    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // let updatelocation = new H.map.Marker(data.coords.latitude,data.coords.longitude);
      this.mylocation.setPosition({ lat: data.coords.latitude, lng: data.coords.longitude });
    });


    //Empieza el Compass

    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => {
        this.compass = data.magneticHeading
      },
      (error: any) => console.log(error)
    );

    var subscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) => {
        this.compass = data.magneticHeading
      }
    );

    //Empieza el Accelerometer

    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => {
        this.accX = acceleration.x
        this.accY = acceleration.y
        this.accZ = acceleration.z
      },
      (error: any) => console.log(error)
    );

    var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.accX = acceleration.x
      this.accY = acceleration.y
      this.accZ = acceleration.z
    });

  }




}
