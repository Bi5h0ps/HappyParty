import { Component, OnInit } from '@angular/core';
import { Client } from '../../shared/client.model';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(client: Client) {
    this.service.formData = Object.assign({}, client);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteClient(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
