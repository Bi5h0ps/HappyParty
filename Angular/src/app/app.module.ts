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
import { ClientComponent } from './management/Clients/client/client.component';
import { ClientListComponent } from './management/Clients/client-list/client-list.component';
import { ClientService } from './management/shared/client.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ManagementComponent,
    HomeComponent,
    ClientsComponent,
    ClientComponent,
    ClientListComponent
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
