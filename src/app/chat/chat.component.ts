import { Component, OnInit } from '@angular/core';
import { LaravelserviceService } from '../laravelservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private httpService: LaravelserviceService) { }

  ngOnInit(): void {
    this.showListeMessage();
  }

  listeMessage: any;

  showListeMessage(){
    this.httpService.getListeMessage().subscribe(
      (data: any) => {
        console.log(data);
        this.listeMessage = data;
      }
    )
  }

}
