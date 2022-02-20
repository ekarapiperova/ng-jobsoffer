import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './main/jobs/jobs.component';
import { jobReactiveFormComponent } from './main/job-reactive-form/job-reactive-form.component';
import { TestComponent } from './home/test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'jobs/create',
    component: jobReactiveFormComponent
  },
  {
    path: 'jobs/edit/:id',
    component: jobReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
