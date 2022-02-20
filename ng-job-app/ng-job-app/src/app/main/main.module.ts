import { NgModule } from '@angular/core';
import { JobItemComponent } from './job-item/job-item.component';
import { JobTdFormComponent } from './job-td-form/job-td-form.component';
import { jobReactiveFormComponent } from './job-reactive-form/job-reactive-form.component';
import { JobsComponent } from './jobs/jobs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MainRoutingModule
  ],
})
export class MainModule{
}
