import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../shared/info.service';
import { Client } from '../../shared/client.model';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent implements OnInit {

 // 0 => first name 
  // 1 => vip level
  // 2 => ALL
  searchFlag: number = 2;
  Content: string[]=['Search by First Name','Search by VipLevel','List All'];
  searchValue: string = '';


  constructor(private service: InfoService) { }

  ngOnInit() {
    this.service.refreshListAll();
  }

  populateForm(client: Client) {
    this.service.formData.ClientId = client.ClientId;
    for (let info of this.service.Infolist) {
      if (info.ClientId == client.ClientId) {
        this.service.formData = Object.assign({}, info);
        break;
      } else {
        this.service.formData = {
          ClientId: client.ClientId,
          Email: '',
          PhoneNum: null,
        }
      }
    }
  }

  toggleSearch(flag: number) {
    this.searchFlag = flag;
    this.searchValue = null;
  }

  onDelete(id: number, input: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteInfo(id).subscribe(res => {
        this.onSearch(input);
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
