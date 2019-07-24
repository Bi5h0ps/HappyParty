import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../shared/info.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private service: InfoService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ClientId: null,
      Email: '',
      PhoneNum: null,
    }
  }


  onSubmit(form: NgForm) {
    this.insertRecord(form);
    this.ngOnInit;
  }

  insertRecord(form: NgForm) {
    this.service.postInfo(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshListAll();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putInfo(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshListAll();
    });
  }
}
