import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaravelserviceService } from '../laravelservice.service';
import { MicoService } from '../mico.service';

@Component({
  selector: 'app-rdvbydate',
  templateUrl: './rdvbydate.component.html',
  styleUrls: ['./rdvbydate.component.css']
})
export class RdvbydateComponent implements OnInit {

  constructor(private httpService: MicoService, private route: ActivatedRoute, private laravelService: LaravelserviceService) { }

  daterdv = this.route.snapshot.paramMap.get('daterdv');

  ngOnInit(): void {
    this.showRdvByDate(this.daterdv);
  }

  listeRdvParDate: any;

  showRdvByDate(daterdv: any){
    this.laravelService.getRendezvousByDate(daterdv).subscribe(
      (data: any) => {
        console.log(data);
        this.listeRdvParDate = data;
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
