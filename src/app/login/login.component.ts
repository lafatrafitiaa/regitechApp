import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LaravelserviceService } from '../laravelservice.service';
import { MicoService } from '../mico.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm:FormGroup;
  email: string = "";
  mdp: string = "";

  constructor(private httpService: MicoService, private route: ActivatedRoute, private fb: FormBuilder, private laravelService: LaravelserviceService) {
    this.userForm = this.fb.group({
      email:'',
      mdp:''
    });
  }

  ngOnInit(): void {
  }

  traitementLogin(){
    this.email = this.userForm.get('email')?.value;
    this.mdp = this.userForm.get('mdp')?.value;
    //this.iduserrole = this.userForm.get('iduserrole')?.value;
    console.log(this.email, this.mdp);
    this.laravelService.loginApk(this.email, this.mdp).subscribe(
      (data: any) => {
        if(data.status == 200){
          localStorage.setItem('channel', data.data.channel);
          localStorage.setItem('token', data.data.token);
          window.location.href = "statistique";
        }


        //console.log('log'+ data);
      //   if(data.length == 0) {
      //     window.location.href = "login";
      //   }
      //   //console.log(data);
      //   this.laravelService.getToken(data[0].id).subscribe(
      //     (tokendata: any) => {
      //       localStorage.setItem('token', tokendata[0].token);
      //       sessionStorage.setItem('id', tokendata[0].id);
      //       sessionStorage.setItem('idclients', data[0].id);
      //       sessionStorage.setItem('userrole', data[0].iduserrole);
      //     }
      //   )
      //   window.location.href = "statistique";
      // }

      }
    )
  }

}
