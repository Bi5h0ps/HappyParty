import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ClientId: null,
      FirstName: '',
      LastName: '',
      VipLevel: null
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.ClientId == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postClient(form.value).subscribe(res => {
      this.resetForm(form);
    });
  }

  updateRecord(form: NgForm) {
    this.service.putClient(form.value).subscribe(res => {
      this.resetForm(form);
    });
  }
}
