import { Component, EventEmitter, Input, Output } from '@angular/core';
import { job } from '../../models/job.model';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent {

  @Input() job: job;
  @Input() position: number;

  @Output() jobClicked: EventEmitter<job> = new EventEmitter<job>();
  @Output() jobDeleted: EventEmitter<number> = new EventEmitter<number>();

  onClick(): void {
    this.jobClicked.emit(this.job);
  }

  onDelete(): void {
    this.jobDeleted.emit(this.job.id);
  }
}
