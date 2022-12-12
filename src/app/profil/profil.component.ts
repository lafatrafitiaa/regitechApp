import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MicoService } from '../mico.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private httpService: MicoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  logout(){
    this.httpService.logoutApk(5).subscribe(
      (data: any) => {
        window.location.href = "login";
      }
    );
  }

}
