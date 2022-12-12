import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LaravelserviceService } from '../laravelservice.service';
import { MicoService } from '../mico.service';

@Component({
  selector: 'app-reportrdv',
  templateUrl: './reportrdv.component.html',
  styleUrls: ['./reportrdv.component.css']
})
export class ReportrdvComponent implements OnInit {

  public userForm:FormGroup;
  societe: string = "";
  mailclient: string = "";
  daterdv: Date = new Date();
  heurerdv: string = "";
  lieu: string = "";
  tel: string = "";
  motif: string = "";

  constructor(private httpService: MicoService, private route: ActivatedRoute, private fb: FormBuilder, private laravelService: LaravelserviceService) {
    this.userForm = this.fb.group({
      societe:'',
      mailclient: '',
      daterdv: '',
      heurerdv: '',
      lieu: '',
      tel: '',
      motif: ''
    });
   }

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

  reporterRdv(id: any){
    this.laravelService.getDetailProduit(id).subscribe(
      (data: any) => {
        this.ficheRdv = this.showFicheRdv(2);
        this.daterdv = this.userForm.get('daterdv')?.value;
        this.heurerdv = this.userForm.get('heurerdv')?.value;
        this.lieu = this.userForm.get('lieu')?.value;
        if(this.lieu == '' || !this.userForm.get('daterdv')?.value || !this.userForm.get('heurerdv')?.value) {
          for (let i = 0; i < data.length; i++) {
            if(this.lieu == '') this.lieu = data[i].lieu;
            if(!this.userForm.get('daterdv')?.value) this.daterdv = data[i].daterdv;
            if(!this.userForm.get('heurerdv')?.value) this.heurerdv = data[i].heurerdv;
          }
        }
        this.laravelService.reportRdv(id, this.daterdv, this.heurerdv+':00', this.lieu).subscribe(
          (data: any) => {
            console.log('modification reussi');
            window.location.href = "ficheRendezvous/"+id;
          }
        )
      }
    )

  }

}
