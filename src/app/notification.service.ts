import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { Notification } from "angular2-notifications";

import 'rxjs/add/operator/toPromise';
/*
@Injectable()
export class NotificationService {
  
  private registration : PushRegistration;

  constructor(
    private http: Http,
    private sw: ServiceWorker, 
    private pnService: PushNotificationsService) { }

  public init() : void {
    this.sw.log().subscribe(message => console.log(message));

    this.register();
    
    if(this.pnService.isSupported()) {
      this.pnService.requestPermission();
    }
  }

  public register() : void {
    let options : PushSubscriptionOptionsInit = {
      applicationServerKey: //this.urlBase64ToUint8Array(
        'BEbzsJrblsB9rF4Jx8SD-bO3768-w2t0Oa0vRZ5fqmhgiX6Mx8P5qjYMU5OBtq3fiWiane0trsDiNPFxfPUdhx8'
      //)
    };

    this.sw
      .registerForPush(options)
      .subscribe((registration : NgPushRegistration) : void => {
        console.log("registered: ", registration);
        this.registration = registration;
        
        this.sw.push.subscribe(pushMessage => {
          console.log("received push message:", pushMessage);
        }, error => {
          console.log("push message not ok:", error);
        }, () => {
          console.log("push message completed");
        });

        this.sendRegistration(registration)
          .then(result => {
            console.log("registration was sent successfully: ", result);
          })
          .catch(error => {
            console.error("could not send registration:", error);
          });
      }, (error : any) : void => {
        console.error("registration failed with:", error);

      }, () : void => {
        console.log("registration completed");

      });
  }

  public unregister() : void{
    this.registration.unsubscribe().subscribe((success : boolean) : void => {
      console.log("unregistered");
    }, (error : any) : void => {
      console.error("unregistration failed with:", error);

    }, () : void => {
      console.log("unregistration completed");

    })
  }

  public showNotification() : void {
    let pushNotification : PushNotification = {
      body: 'message of the notification',
      icon: './assets/icon.png',
      tag: 'tag',
      renotify: true,
      silent: false,
      sound: './assets/notification.wav',
      noscreen: false,
      sticky: true,
      dir: 'auto', // | 'ltr' | 'rtl'
      lang: 'en',
      vibrate: [100,200,100,400]
    }

    this.pnService.create('title of the notification', pushNotification);
  }

  private sendRegistration(registration : NgPushRegistration) : Promise<any> {
      let url : URL;
      let options : RequestOptionsArgs = {};

      console.log("sending registration ...");

      return this.http.post('/register', {
        registration: registration.toJSON()
      }, options)
      .toPromise();
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
*/