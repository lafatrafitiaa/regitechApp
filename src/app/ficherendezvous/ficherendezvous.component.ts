import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaravelserviceService } from '../laravelservice.service';
import { MicoService } from '../mico.service';

@Component({
  selector: 'app-ficherendezvous',
  templateUrl: './ficherendezvous.component.html',
  styleUrls: ['./ficherendezvous.component.css']
})
export class FicherendezvousComponent implements OnInit {

  constructor(private httpService: MicoService, private route: ActivatedRoute, private laravelService: LaravelserviceService) { }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.showFicheRdv(this.id);
  }

  ficheRdv: any;

  showFicheRdv(id: any){
    this.laravelService.getDetailRendezvous(id).subscribe(
      (data: any) => {
        console.log(data);
        this.ficheRdv = data;
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
