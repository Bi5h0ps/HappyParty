import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ClientId: '',
      FirstName: '',
      LastName: '',
      VipLevel: null,
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
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putClient(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
