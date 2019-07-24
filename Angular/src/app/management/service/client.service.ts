import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient } from "@angular/common/http";
import { Info } from './info.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  formData: Client;
  formClientInfo: Info;
  list: Client[] = [];
  Infolist: Info[] = [];

  readonly rootURL = "https://localhost:44333/api"

  constructor(private http: HttpClient) {
  }

  postClient(formData: Client) {
    return this.http.post(this.rootURL + '/Clients', formData);
  }

  postInfo(formClientInfo: Info) {
    return this.http.post(this.rootURL + '/ContactInfoes', formClientInfo);
  }

  refreshList(id: number | string) {
    if (typeof id === 'string') {
      this.http.get(this.rootURL + '/Clients' + '?FirstName=' + id)
        .toPromise().then(res => this.list = res as Client[]);
      this.http.get(this.rootURL + '/ContactInfoes')
        .toPromise().then(res => this.Infolist = res as Info[]);
    } else {
      this.http.get(this.rootURL + '/Clients' + '?level=' + id)
        .toPromise().then(res => this.list = res as Client[]);
      this.http.get(this.rootURL + '/ContactInfoes')
        .toPromise().then(res => this.Infolist = res as Info[]);
    }
  }

  refreshListAll() {
    this.http.get(this.rootURL + '/Clients')
      .toPromise().then(res => this.list = res as Client[]);
    this.http.get(this.rootURL + '/ContactInfoes')
      .toPromise().then(res => this.Infolist = res as Info[]);
  }

  putClient(formData: Client) {
    return this.http.put(this.rootURL + '/Clients/' + formData.ClientId, formData);
  }

  deleteClient(id: number) {
    return this.http.delete(this.rootURL + '/Clients/' + id);
  }

  putInfo(formData: Info) {
    return this.http.put(this.rootURL + '/ContactInfoes/' + formData.ClientId, formData);
  }

  deleteInfo(id: number) {
    return this.http.delete(this.rootURL + '/ContactInfoes/' + id);
  }
}
