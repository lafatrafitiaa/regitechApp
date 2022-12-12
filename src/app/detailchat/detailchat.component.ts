import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LaravelserviceService } from '../laravelservice.service';

@Component({
  selector: 'app-detailchat',
  templateUrl: './detailchat.component.html',
  styleUrls: ['./detailchat.component.css']
})
export class DetailchatComponent implements OnInit {

  public userForm:FormGroup;
  messages: string="";

  constructor(private httpService: LaravelserviceService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      messages:''
    });
  }

  idclient = this.route.snapshot.paramMap.get('idclient');

  ngOnInit(): void {
    this.showConversation(this.idclient);
    this.getClient(this.idclient);
  }

  conversation: any;
  aboutclient: any;

  showConversation(idclient: any){
    this.httpService.getConversation(idclient).subscribe(
      (data: any) => {
        console.log(data);
        this.conversation = data;
      }
    )
  }

  getClient(idclient: any){
    this.httpService.getClient(idclient).subscribe(
      (data: any) => {
        console.log(data);
        this.aboutclient = data;
      }
    )
  }

  saveMessage(idclient: any){
    this.messages = this.userForm.get('messages')?.value;
    this.httpService.saveConversation(idclient, this.messages).subscribe(
      (data: any) => {
        console.log('saved');
        window.location.href = "conversation/"+idclient;
      }
    )
  }

}
