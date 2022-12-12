import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LaravelserviceService } from '../laravelservice.service';
import { MicoService } from '../mico.service';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {

  public userForm:FormGroup;
  prixdevis: string = "";
  datevalidite: Date = new Date();

  constructor(private httpService: MicoService, private laravelService: LaravelserviceService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      prixdevis:'',
      datevalidite:''
    });
  }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.detailProduit(this.id);
  }

  ficheProduit: any;

  detailProduit(id: any){
    this.laravelService.getDetailProduit(id).subscribe(
      (data: any) => {
        console.log(data);
        this.ficheProduit = data;
      }
    )
  }

  valideeNotificationDetail(id: any, email: any){
    this.laravelService.validerCommandeProduit(id, email).subscribe(
      (data: any) => {
        console.log(data);
        window.location.href ="notification";
      }
    )
  }

  annuleeNotificationDetail(id: any, email: any){
    this.laravelService.annulerCommandeProduit(id, email).subscribe(
      (data: any) => {
        console.log(data);
        window.location.href ="notification";
      }
    )
  }

  valideeDevis(id: any, email: any){
    this.prixdevis = this.userForm.get('prixdevis')?.value;
    this.datevalidite = this.userForm.get('datevalidite')?.value;
    this.laravelService.validerDevisProduits(id, email, this.prixdevis, this.datevalidite).subscribe(
      (data: any) => {
        console.log(data);
        window.location.href = "notification";
      }
    )
  }

}
