import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SwPush } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NotificationService {
  
  private subscription : PushSubscription;

  constructor(
    private http: Http,
    private swPush: SwPush,
    private snackBar: MatSnackBar) {}

  public register() : void {
    let options = {
      serverPublicKey: //this.urlBase64ToUint8Array(
        'BEbzsJrblsB9rF4Jx8SD-bO3768-w2t0Oa0vRZ5fqmhgiX6Mx8P5qjYMU5OBtq3fiWiane0trsDiNPFxfPUdhx8'
      //)
    };

    this.swPush.messages.subscribe((notification) => {
      console.debug("received notification: ", notification);

      /*
      Notification.requestPermission((result) => {
        if (result === 'granted') {
          navigator.serviceWorker.ready.then(registration => {
            registration.showNotification('ze title', {
              //renotify: true,
              //silent: false,
              //sound: './assets/notification.wav',
              //noscreen: false,
              //sticky: true,
              //vibrate: [100,200,100,400]
              body: 'message of the notification',
              icon: './assets/icon.png',
              tag: 'tag',
              dir: 'auto', // | 'ltr' | 'rtl'
              lang: 'en'
            });
          });
        }
      });

      */
    });

    this.swPush
      .requestSubscription(options)
      .then(pushSubscription => {
        this.subscription = pushSubscription;

        console.debug("Sending subscription ...");
  
        this.http
        .post('/subscribe', { subscription: pushSubscription })
        .toPromise()
        .then(() => {
          this.snackBar.open('Now you are subscribed', null, {
            duration: 2000
          }); 
        })
        .catch(err => console.error(err));
      })
      .catch( err => console.error(err));
  }

  private urlBase64ToUint8Array(base64String) : Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}