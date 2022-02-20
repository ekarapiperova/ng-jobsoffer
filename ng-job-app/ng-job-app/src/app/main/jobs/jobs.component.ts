import { Component, OnInit } from '@angular/core';
import { job } from '../../models/job.model';
import { jobsService } from '../../services/jobs.service';
import { map, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: job[];

  favoritejob: job;

  errorMessage: string;

  constructor(private jobsService: jobsService) {
  }

  ngOnInit(): void {
    this.getContent();
  }

  onMarkAsFavorite(job: job): void {
    this.favoritejob = job;
  }

  onjobDelete(jobId: number): void {
    this.jobsService.deletejob$(jobId).subscribe({
      next: () => {
        this.jobs = this.jobs.filter(job => job.id !== jobId);
      }
    });
  }

  private getContent(): void {
    this.jobsService.getjobs$().pipe(
      map((response: job[]) => {
        const sortedResponse = response.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }

          if (a.title > b.title) {
            return 1;
          }

          return 0;
        });

        return sortedResponse;
      }),
      take(1)
    ).subscribe({
      next: (response: job[]) => {
        this.jobs = response;
      },
      error: (response: HttpErrorResponse) => {
        this.errorMessage = response.message;
      }
    });
  }
}
