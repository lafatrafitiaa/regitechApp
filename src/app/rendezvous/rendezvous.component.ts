import { Component, OnInit } from '@angular/core';
import { LaravelserviceService } from '../laravelservice.service';
import { MicoService } from '../mico.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {

  constructor(private httpService: MicoService, private laravelService: LaravelserviceService) { }

  ngOnInit(): void {
    this.showDemandeRdv();
  }

  listeRdv: any;

  showDemandeRdv(){
    this.laravelService.getRendezvous().subscribe(
      (data: any) => {
        console.log(data);
        this.listeRdv = data;
      }
    )
  }

  actionButtonRdv(id: any,etat: any,email: any){
    this.laravelService.updateRdv(id, etat, email).subscribe(
      (data: any) => {
        console.log("ok");
        window.location.href = "demandeRendezvous";
      }
    )
  }

}
