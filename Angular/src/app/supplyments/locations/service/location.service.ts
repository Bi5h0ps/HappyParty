import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  formData: Location;
  Locationlist: Location[] = [];
  isUpdate = false;

  readonly rootURL = "https://localhost:44333/api"

  constructor(private http: HttpClient) {
  }

  postLocation(formData: Location) {
    return this.http.post(this.rootURL + '/Locations', formData);
  }

  refreshList(id: number | string, flag: number) {
    if (flag == 0) {
      this.http.get(this.rootURL + '/Locations?lid='+id)
        .toPromise().then(res => this.Locationlist = res as Location[]);
    } else if (flag == 1) {
      this.http.get(this.rootURL + '/Locations?pc='+ id)
        .toPromise().then(res => this.Locationlist = res as Location[]);
    } else {
      this.http.get(this.rootURL + '/Locations')
        .toPromise().then(res => this.Locationlist = res as Location[]);
    }
  }

  refreshListAll() {
    this.http.get(this.rootURL + '/Locations')
      .toPromise().then(res => this.Locationlist = res as Location[]);
  }

  putLocation(formData: Location) {
    return this.http.put(this.rootURL + '/Locations/' + formData.LocationId, formData);
  }

  deleteLocation(id: number) {
    return this.http.delete(this.rootURL + '/Locations/' + id);
  }
}
