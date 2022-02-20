import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { JobItemComponent } from './main/job-item/job-item.component';
import { JobTdFormComponent } from './main/job-td-form/job-td-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { jobReactiveFormComponent } from './main/job-reactive-form/job-reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './main/jobs/jobs.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './home/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    JobItemComponent,
    JobTdFormComponent,
    jobReactiveFormComponent,
    JobsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
