import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService{

  formData  : Client;
  list : Client[];
  readonly rootURL ="http://127.0.0.1:8080/api"

  constructor(private http : HttpClient) {}

  postClient(formData : Client){
    return this.http.post(this.rootURL+'/Clients',formData);
  }

  putClient(formData : Client){
    return this.http.put(this.rootURL+'/Clients/'+formData.ClientId,formData);
     
  }

  deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'/Clients/'+id);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Clients')
    .toPromise().then(res => this.list = res as Client[]);
  }

}
