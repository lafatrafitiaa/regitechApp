import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MicoService {
  urlBase = 'http://localhost:8080';
  urlSuite = '/notif/commandes/envoyee';

  constructor(private http: HttpClient) { }

  getConnexion(){
    return this.http.get(this.urlBase + this.urlSuite);
  }

  connexionDetailProduit(id: any){
    this.urlSuite = '/produit/produits/' + id;
    return this.http.get(this.urlBase + this.urlSuite);
  }

  // sendEmailValidation(email: any){
  //   this.urlSuite = 'mail/sendmail/'+email;
  //   return this.http.get(this.urlBase + this.urlSuite);
  // }

  modifEtatValidee(id: any){
    this.urlSuite = '/notif/modification/validee/' + id;
    return this.http.get(this.urlBase + this.urlSuite);
  }

  validationNotif(id: any, email: any){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': ''
    });
    let options = { headers: headers};
    this.urlSuite = 'mail/sendmail/'+email;
    this.modifEtatValidee(id);
    return this.http.post(this.urlBase + this.urlSuite, id, options);
  }

  getStatistique(){
    this.urlSuite = '/test/statistique';
    return this.http.get(this.urlBase + this.urlSuite);
  }

  getDemandeRdv(){
    this.urlSuite = '/rdv/envoye';
    return this.http.get(this.urlBase + this.urlSuite);
  }


  modifEtatRdv(id: any, etat: any){
    this.urlSuite = '/rdv/update/'+id+'/'+etat;
    return this.http.get(this.urlBase + this.urlSuite);
  }

  actionBtnRdv(id: any, etat: any, email: any){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': ''
    });
    let options = {headers: headers};
    this.urlSuite = 'mail/sendMailRdv/'+email+'/'+etat;
    this.modifEtatRdv(id, etat);
    return this.http.post(this.urlBase + this.urlSuite, id, options);
  }

  ficheRendezvous(id: any){
    this.urlSuite = '/rdv/rendezvous/'+id;
    return this.http.get(this.urlBase + this.urlSuite);
  }

  ajoutRdv(mail:any, daterdv:any, heurerdv:any, lieu:any, motif:any, etat:any, societe:any, tel:any){
    let input = {
      mailclient : mail,
      daterdv : daterdv,
      heurerdv : heurerdv,
      lieu : lieu,
      motif : motif,
      etat : etat,
      societe : societe,
      tel : tel
    }
    this.urlSuite = '/rdv/ajout/'+mail+'/'+daterdv+'/'+heurerdv+'/'+lieu+'/'+motif+'/'+etat+'/'+societe+'/'+tel;
    return this.http.post(this.urlBase + this.urlSuite, input);
  }

  tousRdv(){
    this.urlSuite = '/rdv/rendezvous';
    return this.http.get(this.urlBase + this.urlSuite);
  }

  modificationGlobaleRdv(id: any, societe: any, daterdv: any, heurerdv: any, lieu: any, mail: any, tel: any, motif: any){
    let input = {
      societe : societe,
      daterdv : daterdv,
      heurerdv : heurerdv,
      lieu : lieu,
      mailclient : mail,
      tel : tel,
      motif : motif
    }
    this.urlSuite = '/report/'+id+'/'+societe+'/'+daterdv+'/'+heurerdv+'/'+lieu+'/'+mail+'/'+tel+'/'+motif;
    return this.http.post(this.urlBase + this.urlSuite, input);
  }

  reporterRdv(id: any, daterdv: any, heurerdv: any, lieu: any){
    let input = {
      daterdv : daterdv,
      heurerdv : heurerdv,
      lieu : lieu
    }
    this.urlSuite = '/rdv/report/'+id+'/'+daterdv+'/'+heurerdv+'/'+lieu;
    return this.http.post(this.urlBase + this.urlSuite, input);
  }

  getRdvByDate(date: any){
    this.urlSuite = '/rdv/rdvdate/'+date;
    return this.http.get(this.urlBase + this.urlSuite);
  }

  loginApk(email: any, pass: any, iduserrole: any){
    let input = {
      email: email,
      pass: pass,
      iduserrole: iduserrole
    }
    this.urlSuite = '/log/login/'+email+'/'+pass+'/'+iduserrole;
    return this.http.post(this.urlBase + this.urlSuite, input);
  }

  getToken(idclients: any){
    this.urlSuite = '/log/clients/'+idclients;
    return this.http.get(this.urlBase + this.urlSuite);
  }

  logoutApk(idclients: any){
    localStorage.clear();
    sessionStorage.clear();
    this.urlSuite = '/log/logout/'+idclients;
    return this.http.get(this.urlBase + this.urlSuite);
  }

}
