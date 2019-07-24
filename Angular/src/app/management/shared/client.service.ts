import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  formData: Client;
  list : Client[] = [];

  readonly rootURL ="https://localhost:44333/api"

  constructor(private http : HttpClient) {
   }

  postClient(formData : Client){
   return this.http.post(this.rootURL+'/Clients',formData);
  }

  refreshList(id : number | string){
    if (typeof id === 'string') {
      this.http.get(this.rootURL+'/Clients'+'?FirstName='+id)
      .toPromise().then(res => this.list = res as Client[]);
    } else {
      this.http.get(this.rootURL+'/Clients'+'?level='+id)
      .toPromise().then(res => this.list = res as Client[]);
    }
  }

  refreshListAll() {
    this.http.get(this.rootURL+'/Clients')
    .toPromise().then(res => this.list = res as Client[]);
  }

  putClient(formData : Client){
    return this.http.put(this.rootURL+'/Clients/'+formData.ClientId,formData);
  }

  deleteClient(id : number){
    return this.http.delete(this.rootURL+'/Clients/'+id);
  }
}
