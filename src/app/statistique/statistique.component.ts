import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { LaravelserviceService } from '../laravelservice.service';
import { MicoService } from '../mico.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor(private httpService: MicoService, private laravelService: LaravelserviceService) {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
    this.createChart();
    this.getData();
    this.donnut();
    this.getStatCommande();
  }

  public chart: any;
  dataStatistique: any;
  statCommande: any;

  getData(){
    // this.httpService.getStatistique().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.dataStatistique = data;
    //   }
    // )
    this.laravelService.statistiqueProduitprix().subscribe(
      (data: any) => {
        console.log(data);
        this.dataStatistique = data;
      }
    )
  }

  createChart(){
    this.laravelService.statistiqueProduitprix().subscribe(
      (valeur: any) => {
        const mydata = [];
        const produit = [];
        const prix = [];
        for (let i = 0; i < valeur.length; i++) {
          produit.push(valeur[i].designation);
          prix.push(valeur[i].prix);

      }
      this.chart = new Chart("MyChart", {

          type : 'bar',

          data: {
            labels: produit,
             datasets: [
              {
                label: "prix",
                data: prix,
                backgroundColor: 'blue'
              }
            ]
          },
          options: {
            aspectRatio:1.5
          }

        });
    })
  }

  getStatCommande(){
    this.laravelService.statistiqueCommandeCat().subscribe(
      (data: any) => {
        console.log(data);
        this.statCommande = data;
      }
    )
  }

  donnut(){
    this.laravelService.statistiqueCommandeCat().subscribe(
      (valeur: any) => {
        const categorie = [];
        const quantite = [];
        for (let i = 0; i < valeur.length; i++) {
          categorie.push(valeur[i].categorie);
          quantite.push(valeur[i].quantite);
        }
        this.chart = new Chart("MyDonnut", {

          type : 'doughnut',

          data: {
            labels: categorie,
            datasets: [{
              data: quantite,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(70,50,200)',
                'rgb(50,102,100)'
              ],
              hoverOffset: 4
            }]
          }
        });

      }
    )

  }
}
