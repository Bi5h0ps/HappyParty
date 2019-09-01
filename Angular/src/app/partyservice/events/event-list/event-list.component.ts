import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Event } from '../../service/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  searchFlag: number = 0;
  Content: string[]=['Search by Event ID','Search by Client ID','Search by Location', 'List All'];
  searchValue: string = '';
  isItemSelected: boolean = false;
  @ViewChild('closeModal',{static: false}) closeModal: ElementRef;
  @ViewChild('newClientButton', {static: false}) newClientButton: ElementRef;


  constructor(public service: EventService) { }

  ngOnInit() {
    this.onNewEvent();
    this.service.refreshListAll();
  }

  populateForm(event: Event) {
    this.service.formData = Object.assign({}, event);
    this.service.formData.EventDate = this.service.formData.EventDate.substring(0,10);
  }

  toggleSearch(flag: number) {
    this.searchFlag = flag;
    this.searchValue = null;
  }

  isDisabled(): boolean{
    if (this.searchFlag == 3) return true;
    return false;
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEvent(id).subscribe(res => {
        this.service.refreshListAll();
        this.closeModal.nativeElement.click();
      });
    }
  }

  onSearch(input: string) {
    if(this.searchFlag == 0) {
      this.service.refreshList(Number(input.substring(2,input.length)), this.searchFlag);
    } else if (this.searchFlag == 1) {
      this.service.refreshList(Number(input.substring(2,input.length)), this.searchFlag);
    } else if (this.searchFlag == 2) {
      this.service.refreshList(input, this.searchFlag);
    } else {
      this.service.refreshListAll();
    }
  }

  onRefresh() {
    this.service.refreshListAll();
  }

  onNewEvent() {
    this.isItemSelected = false;
    this.service.formData = {
      EventId:null,
      ClientId: null,
      LocationId:'',
      EventDate: '',
      InviteeNum: null,
      budget:null,
    }
    this.service.formClientInfo = {
      ClientId: null,
      FirstName: "",
      LastName: "",
      VipLevel: null
    }
  }

  onSelect(event: Event) {
    this.service.refreshListAll();
    this.newClientButton.nativeElement.click();
    this.isItemSelected = true;
    this.service.formData = Object.assign({}, event);
    this.service.formData.EventDate = this.service.formData.EventDate.substring(0,10);
  }

  modalOnSubmit() {
      if (this.service.formData.EventId == null) {
        this.service.postEvent(this.service.formData).subscribe(res => {
          this.closeModal.nativeElement.click();
          this.onRefresh();
        });
      } else {
        this.service.putEvent(this.service.formData).subscribe(res => {
          this.closeModal.nativeElement.click();
          this.onRefresh();
        });
      }
  }

}
