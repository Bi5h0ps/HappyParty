import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocationService } from '../service/location.service';
import { Location } from '../service/location.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  searchFlag: number = 0;
  Content: string[] = ['Search by Location Name', 'Search by Postal Code', 'List All'];
  searchValue: string = '';
  isItemSelected: boolean = false;
  @ViewChild('closeModal', { static: false }) closeModal: ElementRef;
  @ViewChild('newClientButton', { static: false }) newClientButton: ElementRef;


  constructor(private service: LocationService) { }

  ngOnInit() {
    this.onNewLocation();
    this.service.refreshListAll();
  }

  populateForm(location: Location) {
    this.service.formData = Object.assign({}, location);
  }

  toggleSearch(flag: number) {
    this.searchFlag = flag;
    this.searchValue = null;
  }

  isDisabled(): boolean {
    if (this.searchFlag == 2) return true;
    return false;
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteLocation(id).subscribe(res => {
        this.service.refreshListAll();
        this.closeModal.nativeElement.click();
      });
    }
  }

  onSearch(input: string) {
    if(this.searchFlag == 0) {
      this.service.refreshList(input, this.searchFlag);
    } else if (this.searchFlag == 1) {
      this.service.refreshList(input, this.searchFlag);
    } else {
      this.service.refreshListAll();
    }
  }

  onRefresh() {
    this.service.refreshListAll();
  }

  onNewLocation() {
    this.isItemSelected = false;
    this.service.formData = {
      LocationId: "",
      PostCode: "",
      LocationAddress: "",
      AdditionalInfo: ""
    }
  }

  onSelect(location: Location) {
    this.service.refreshListAll();
    this.newClientButton.nativeElement.click();
    this.isItemSelected = true;
    this.service.formData = Object.assign({}, location);
  }

  modalOnSubmit() {
    this.service.postLocation(this.service.formData).subscribe(res => {
      this.closeModal.nativeElement.click();
      this.onRefresh();
    });

  }

}
