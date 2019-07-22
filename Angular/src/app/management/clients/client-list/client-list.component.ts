import { Component, OnInit } from '@angular/core';
import { Client } from '../../shared/client.model';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  // 0 => first name 
  // 1 => vip level
  // 2 => ALL
  searchFlag: number = 0;
  Content: string[]=['Search by First Name','Search by VipLevel','List All'];
  searchValue: string = '';


  constructor(private service: ClientService) { }

  ngOnInit() {
    this.service.refreshListAll();
  }

  populateForm(client: Client) {
    this.service.formData = Object.assign({}, client);
  }

  toggleSearch(flag: number) {
    this.searchFlag = flag;
    this.searchValue = null;
  }

  isDisabled(): boolean{
    if (this.searchFlag == 2) return true;
    return false;
  }

  onDelete(id: number,input: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteClient(id).subscribe(res => {
        if(this.searchFlag == 0) {
          this.service.refreshList(input);
        } else if (this.searchFlag == 1) {
          this.service.refreshList(Number(input));
        } else {
          this.service.refreshListAll();
        }
      });
    }
  }

  onSearch(input: string) {
    if(this.searchFlag == 0) {
      this.service.refreshList(input);
    } else if (this.searchFlag == 1) {
      this.service.refreshList(Number(input));
    } else {
      this.service.refreshListAll();
    }
  }

}
