import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { jobReactiveFormComponent } from './job-reactive-form/job-reactive-form.component';
import { MainComponent } from './main.component';
import { AclGuard } from '../guards/acl.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'jobs',
        component: JobsComponent
      },
      {
        path: 'jobs/create',
        component: jobReactiveFormComponent,
        canActivate: [AclGuard]
      },
      {
        path: 'jobs/edit/:id',
        component: jobReactiveFormComponent,
        canActivate: [AclGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'jobs'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
