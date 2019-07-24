import { Injectable } from '@angular/core';
import { Event } from './event.model'
import { Client } from 'src/app/management/service/client.model';
import { HttpClient } from "@angular/common/http";
import { Location } from "./location.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  formData: Event;
  formClientInfo: Client;
  eventList: Event[] = [];
  clientlist: Client[] = [];
  Locationlist: Location[] = [];

  readonly rootURL = "https://localhost:44333/api"

  constructor(private http: HttpClient) {
  }

  postEvent(formData: Event) {
    return this.http.post(this.rootURL + '/Events', formData);
  }

  refreshList(id: number | string) {
    if (typeof id === 'string') {
      this.http.get(this.rootURL + '/Clients' + '?FirstName=' + id)
        .toPromise().then(res => this.clientlist = res as Client[]);
      this.http.get(this.rootURL + '/Events')
        .toPromise().then(res => this.eventList = res as Event[]);
      this.http.get(this.rootURL + '/Locations')
        .toPromise().then(res => this.Locationlist = res as Location[]);
    } else {
      this.http.get(this.rootURL + '/Clients' + '?level=' + id)
        .toPromise().then(res => this.clientlist = res as Client[]);
      this.http.get(this.rootURL + '/Events')
        .toPromise().then(res => this.eventList = res as Event[]);
      this.http.get(this.rootURL + '/Locations')
        .toPromise().then(res => this.Locationlist = res as Location[]);
    }
  }

  refreshListAll() {
    this.http.get(this.rootURL + '/Clients')
      .toPromise().then(res => this.clientlist = res as Client[]);
    this.http.get(this.rootURL + '/Events')
      .toPromise().then(res => this.eventList = res as Event[]);
    this.http.get(this.rootURL + '/Locations')
      .toPromise().then(res => this.Locationlist = res as Location[]);
  }

  putEvent(formData: Event) {
    return this.http.put(this.rootURL + '/Events/' + formData.EventId, formData);
  }

  deleteEvent(id: number) {
    return this.http.delete(this.rootURL + '/Events/' + id);
  }
}
