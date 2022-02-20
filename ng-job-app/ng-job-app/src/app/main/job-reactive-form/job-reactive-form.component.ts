import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { job } from '../../models/job.model';
import { jobsService } from '../../services/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-job-reactive-form',
  templateUrl: './job-reactive-form.component.html',
  styleUrls: ['./job-reactive-form.component.scss']
})
export class jobReactiveFormComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;

  job: job;

  destroy$ = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private jobsService: jobsService
  ) {
    this.job = {
      title: '',
      description: '',
      type:'',
      category:''
    };
  }

  get titleFormControl(): FormControl {
    return this.formGroup?.get('title') as FormControl;
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params) => {
        if (params.id) {
          return this.jobsService.getjob$(params.id);
        }

        this.initForm();

        return of(null);
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (response) => {
        if (response) {
          this.job = response;

          this.initForm();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();

      return;
    }

    const job: job = {
      id: this.formGroup.value.id,
      title: this.formGroup.value.title,
      description: this.formGroup.value.description,
      type: this.formGroup.value.type,
      category:this.formGroup.value.category
    };

    let request$;
    if (job.id) {
      request$ = this.jobsService.putjob$(job);
    } else {
      request$ = this.jobsService.postjob$(job);
    }

    request$.subscribe({
      next: () => {
        this.router.navigate(['/jobs']);
      }
    });
  }

  private initForm(): void {
    this.formGroup = this.fb.group({
      id: this.job.id,
      title: this.job.title,
      description: this.job.description,
      category: this.job.category,
      type:this.job.type
    });
  }
}
