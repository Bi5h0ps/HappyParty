import { Component, OnInit } from '@angular/core';
import { Client } from '../../service/client.model';
import { ClientService } from '../../service/client.service';
import { ViewChild, ElementRef} from '@angular/core';

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
  isItemSelected: boolean = false;
  @ViewChild('closeModal',{static: false}) closeModal: ElementRef;
  @ViewChild('newClientButton', {static: false}) newClientButton: ElementRef;


  constructor(private service: ClientService) { }

  ngOnInit() {
    this.onNewClient();
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

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteClient(id).subscribe(res => {
        this.service.refreshListAll();
        this.closeModal.nativeElement.click();
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

  onRefresh() {
    this.service.refreshListAll();
  }

  onNewClient() {
    this.isItemSelected = false;
    this.service.formData = {
      ClientId: null,
      FirstName: "",
      LastName: "",
      VipLevel: null
    }
    this.service.formClientInfo = {
      ClientId: null,
      Email: "",
      PhoneNum: null
    }
  }

  onSelect(clientData: Client) {
    this.service.refreshListAll();
    this.newClientButton.nativeElement.click();
    this.isItemSelected = true;
    this.service.formData = Object.assign({}, clientData);
    this.service.formClientInfo.ClientId = clientData.ClientId;
    for (let info of this.service.Infolist) {
      if (info.ClientId == clientData.ClientId) {
        this.service.formClientInfo = Object.assign({}, info);
        break;
      } else {
        this.service.formClientInfo = {
          ClientId: clientData.ClientId,
          Email: '',
          PhoneNum: null,
        }
      }
    }
  }

  modalOnSubmit() {
      if (this.service.formData.ClientId == null) {
        this.service.postClient(this.service.formData).subscribe(res => {
          this.service.formClientInfo.ClientId = <number> res;
          this.service.postInfo(this.service.formClientInfo).subscribe(res => {
            this.closeModal.nativeElement.click();
            this.onRefresh();
          });
        });
      } else {
        this.service.putClient(this.service.formData).subscribe(res => {
          this.service.putInfo(this.service.formClientInfo).subscribe(res => {
            this.closeModal.nativeElement.click();
            this.onRefresh();
          });
        });
      }
  }
}
