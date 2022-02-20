import { Component, OnInit, ViewChild } from '@angular/core';
import { job } from '../../models/job.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-td-form',
  templateUrl: './job-td-form.component.html',
  styleUrls: ['./job-td-form.component.scss']
})
export class JobTdFormComponent implements OnInit {

  @ViewChild('form') ngForm: NgForm;

  job: job;

  constructor() {
    this.job = {
      title: '',
      type:'',
      category:''
    };
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.ngForm);
  }
}
