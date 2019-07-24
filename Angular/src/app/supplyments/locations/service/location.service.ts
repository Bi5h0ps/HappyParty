import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  formData: Location;
  Locationlist: Location[] = [];

  readonly rootURL = "https://localhost:44333/api"

  constructor(private http: HttpClient) {
  }

  postLocation(formData: Location) {
    return this.http.post(this.rootURL + '/Location', formData);
  }

  refreshListAll() {
    this.http.get(this.rootURL + '/Location')
      .toPromise().then(res => this.Locationlist = res as Location[]);
  }

  putLocation(formData: Location) {
    return this.http.put(this.rootURL + '/Location/' + formData.LocationId, formData);
  }

  deleteLocation(id: number) {
    return this.http.delete(this.rootURL + '/Location/' + id);
  }
}
