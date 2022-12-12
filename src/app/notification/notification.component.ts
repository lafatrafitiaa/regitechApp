import { Component, OnInit } from '@angular/core';
import { LaravelserviceService } from '../laravelservice.service';
import { MicoService } from '../mico.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private httpService: MicoService, private laravelService: LaravelserviceService) { }

  ngOnInit(): void {
    this.showNotification();
  }

  listeNotification: any;

  showNotification(){
    this.laravelService.getNotificationEnvoye().subscribe(
      (data: any) => {
        console.log(data);
        this.listeNotification = data;
      }
    )
  }

  valideeNotification(id: any, email: any){
    this.laravelService.validerCommandeProduit(id, email).subscribe(
      (data: any) => {
        //this.showNotification();
        console.log("ok");
        window.location.href = "notification";
      }
    )
  }

  annuleeNotification(id: any, email: any){
    this.laravelService.annulerCommandeProduit(id, email).subscribe(
      (data: any) => {
        console.log("ok");
        window.location.href = "notification";
      }
    )
  }

}
