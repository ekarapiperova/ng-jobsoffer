import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTdFormComponent } from './job-td-form.component';

describe('jobTdFormComponent', () => {
  let component: JobTdFormComponent;
  let fixture: ComponentFixture<JobTdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobTdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});