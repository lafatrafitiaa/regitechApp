import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ChatComponent } from './chat/chat.component';
import { DetailchatComponent } from './detailchat/detailchat.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { FicherendezvousComponent } from './ficherendezvous/ficherendezvous.component';
import { FormulairerdvComponent } from './formulairerdv/formulairerdv.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfilComponent } from './profil/profil.component';
import { RdvbydateComponent } from './rdvbydate/rdvbydate.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { ReportrdvComponent } from './reportrdv/reportrdv.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'detailProduit/:id', component: DetailproduitComponent},
  {path: 'statistique', component: StatistiqueComponent},
  {path: 'demandeRendezvous', component: RendezvousComponent},
  {path: 'ficheRendezvous/:id', component: FicherendezvousComponent},
  {path: 'formulaireRdv', component: FormulairerdvComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'formulaireReport/:id', component: ReportrdvComponent},
  {path: 'rendezvousParDate/:daterdv', component: RdvbydateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'conversation/:idclient', component: DetailchatComponent},
  {path: 'messagePusher', component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
