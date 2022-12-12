import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ChatComponent } from './chat/chat.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { FicherendezvousComponent } from './ficherendezvous/ficherendezvous.component';
import { FormulairerdvComponent } from './formulairerdv/formulairerdv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendaComponent } from './agenda/agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ReportrdvComponent } from './reportrdv/reportrdv.component';
import { RdvbydateComponent } from './rdvbydate/rdvbydate.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { DetailchatComponent } from './detailchat/detailchat.component';
import { PusherService } from './pusher.service';
import { MessagesComponent } from './messages/messages.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ChatComponent,
    HeaderComponent,
    NotificationComponent,
    DetailproduitComponent,
    StatistiqueComponent,
    RendezvousComponent,
    FicherendezvousComponent,
    FormulairerdvComponent,
    AgendaComponent,
    ReportrdvComponent,
    RdvbydateComponent,
    LoginComponent,
    ProfilComponent,
    DetailchatComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
