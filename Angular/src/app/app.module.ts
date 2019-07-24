import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManagementComponent } from './management/management.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './management/clients/clients.component';
import { ClientComponent } from './management/clients/client/client.component';
import { ClientListComponent } from './management/clients/client-list/client-list.component';
import { ClientService } from './management/shared/client.service';
import { PartyserviceComponent } from './partyservice/partyservice.component';
import { EventsComponent } from './partyservice/events/events.component';
import { EventComponent } from './partyservice/events/event/event.component';
import { EventListComponent } from './partyservice/events/event-list/event-list.component';
import { ContactinfoComponent } from './management/contactinfo/contactinfo.component';
import { InfoComponent } from './management/Contactinfo/info/info.component';
import { InfoListComponent } from './management/Contactinfo/info-list/info-list.component';
import { AddressComponent } from './management/address/address.component';
import { AddressmComponent } from './management/address/addressm/addressm.component';
import { AddresscComponent } from './management/address/addressc/addressc.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ManagementComponent,
    HomeComponent,
    ClientsComponent,
    ClientComponent,
    ClientListComponent,
    PartyserviceComponent,
    EventsComponent,
    EventComponent,
    EventListComponent,
    ContactinfoComponent,
    InfoComponent,
    InfoListComponent,
    AddressComponent,
    AddressmComponent,
    AddresscComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
