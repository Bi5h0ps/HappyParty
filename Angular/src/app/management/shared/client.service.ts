import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient } from "@angular/common/http";
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  Theo: Client;
  Jiahan: Client;
  formData: Client;
  list : Client[] = [];

  readonly rootURL ="http://127.0.0.1:8080/api"

  constructor(private http : HttpClient) {
    this.Theo = new Client(1,"Theo","Guo",3);
    this.Jiahan = new Client(1,"Doomer","Xi",3);
    this.list.push(this.Theo);
    this.list.push(this.Jiahan)
   }

  postClient(formData : Client){
   return this.http.post(this.rootURL+'/Clients',formData);
  }

  refreshList(){
    // this.http.get(this.rootURL+'/Clients')
    // .toPromise().then(res => this.list = res as Client[]);
  }

  putClient(formData : Client){
    return this.http.put(this.rootURL+'/Clients/'+formData.ClientId,formData);
   }

   deleteClient(id : number){
    return this.http.delete(this.rootURL+'/Clients/'+id);
   }
}
