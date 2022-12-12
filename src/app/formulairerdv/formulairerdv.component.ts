import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MicoService } from '../mico.service';

@Component({
  selector: 'app-formulairerdv',
  templateUrl: './formulairerdv.component.html',
  styleUrls: ['./formulairerdv.component.css']
})
export class FormulairerdvComponent implements OnInit {

  public userForm:FormGroup;
  societe: string = "";
  mailclient: string = "";
  daterdv: Date = new Date();
  heurerdv: string = "";
  lieu: string = "";
  tel: string = "";
  motif: string = "";

  constructor(private httpService: MicoService, private route: ActivatedRoute, private fb: FormBuilder) {
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

  ngOnInit(): void {
  }

  ajoutRendezvous() {
    this.societe = this.userForm.get('societe')?.value;
    this.mailclient = this.userForm.get('mailclient')?.value;
    this.daterdv = this.userForm.get('daterdv')?.value;
    this.heurerdv = this.userForm.get('heurerdv')?.value;
    this.lieu = this.userForm.get('lieu')?.value;
    this.motif = this.userForm.get('motif')?.value;
    this.tel = this.userForm.get('tel')?.value;
    this.httpService.ajoutRdv(this.mailclient,this.daterdv, this.heurerdv+':00', this.lieu,this.motif, 1, this.societe , this.tel).subscribe(
      (data: any)=> {
        console.log(data);
        window.location.href = "formulaireRdv";
      }
    );
  }

  testGet(){
    this.societe = this.userForm.get('societe')?.value;
    this.daterdv = this.userForm.get('daterdv')?.value;
    this.heurerdv = this.userForm.get('heurerdv')?.value;
    console.log('date',this.daterdv);
    console.log('soc',this.societe);
    console.log('heure',this.heurerdv);
  }

}
