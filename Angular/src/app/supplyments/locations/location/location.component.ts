import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private service: LocationService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      LocationId:"",
      PostCode:"",
      LocationAddress:"",
      AdditionalInfo:""
    }
  }
}
