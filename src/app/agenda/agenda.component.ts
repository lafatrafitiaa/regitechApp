import { Component, OnInit } from '@angular/core';
import { CalendarOptions} from '@fullcalendar/angular';
import { LaravelserviceService } from '../laravelservice.service';
import { MicoService } from '../mico.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  events = [];
  calendarOptions: CalendarOptions = {};


  constructor(private httpService: MicoService, private laravelService: LaravelserviceService) {}

  ngOnInit(): void {
    this.laravelService.getAllRendezvous().subscribe((data: any) => {
      const myEvent = [];
      let couleur = '';
      for (let i = 0; i < data.length; i++) {
        if(data[i].etat == 0) couleur = '#3EB0B9';
        if(data[i].etat == 1) couleur = '#2ECC71';
        if(data[i].etat == 2) couleur = '#CB4335';
        // if(data[i].daterdv < '2022-10-05' && (data[i].etat == 0 || data[i].etat == 2)) couleur = '#979b9a';
        // if(data[i].daterdv < '2022-10-05' && data[i].etat == 1) couleur = '#01290E';
        //if(data[i].daterdv < '2022-10-10') couleur = '#979b9a';
        myEvent.push({
          title: data[i].societe,
          date: data[i].daterdv,
          color: couleur
        });
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          dateClick: this.handleDateClick.bind(this),
          events: myEvent
        };
      }
    });

    // this.laravelService.getAllRendezvous().subscribe((data: any) => {
    //   this.laravelService.duplicataDateheureRdv().subscribe((value: any) =>{
    //     const myEvent = [];
    //     let couleur = '';
    //     let idduplicate = '';
    //     let titre = '';
    //     for (let i = 0; i < data.length; i++) {


    //       for(let j = 0; j < value.length; j++){
    //         // if(data[i].id != value[j].id) {
    //         //   j = j++;
    //         //   if(data[i].id == value[j].id) couleur = '#f4e11d';

    //         // }
    //         // if(data[i].id)
    //         console.log(data[i].id);
    //         console.log(value[j].id);
    //         if(data[i].etat == 0) couleur = '#CB4335';
    //         if(data[i].etat == 1) couleur = '#2ECC71';
    //         if(data[i].daterdv < '2022-10-08') couleur = '#979b9a';

    //         //else titre = data[i].societe;

    //         myEvent.push({
    //           title: data[i].societe,
    //           date: data[i].daterdv,
    //           color: couleur
    //         });

    //         this.calendarOptions = {
    //           initialView: 'dayGridMonth',
    //           dateClick: this.handleDateClick.bind(this),
    //           events: myEvent
    //         };
    //       }


    //     }
    //   });
    // })

  }

  handleDateClick(arg: any) {
    //alert('date click! ' + arg.dateStr);
    window.location.href = "rendezvousParDate/"+arg.dateStr;
  }
}
