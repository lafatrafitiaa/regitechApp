import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  messagesChannel: any;

  constructor() {
    this.pusher = new Pusher(environment.pusher.key);
    //raha tiana privée le channel de tokony hanana prefixe private-...
    this.messagesChannel = this.pusher.subscribe('00a70677-87e1-4762-ab27-f67aeb4230d1');
  }
}
