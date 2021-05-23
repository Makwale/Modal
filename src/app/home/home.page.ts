import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private localNotification: PhonegapLocalNotification, private oneSignal: OneSignal, private localNotifications: LocalNotifications) {}

  test(){

    this.localNotifications.schedule({
      id: 1,
      title: 'My first notification',
      text: 'Thats pretty easy...',
      sound: 'file://sound.mp3',
      vibrate: true
    });
    
    
  }

}
