import { Component, OnInit } from '@angular/core';
import { PusherService } from '../pusher.service';


interface Messages{
  messages: string;
  user: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  //messages: Array<Messages>;
  public user: any;
  public messages: any;

  constructor(private pusherService: PusherService) {
    this.messages = [];
  }

  ngOnInit(): void {
    this.pusherService.messagesChannel.bind('new-message', (data: any) => {
      this.messages.push(data);
    });
  }

  sendMessage(user: string, messages: string) {
    const message: Messages = {
       user: user,
       messages: messages,
    }
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.messages.push(message);
  }

}
