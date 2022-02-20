import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jobReactiveFormComponent } from './job-reactive-form.component';

describe('jobReactiveFormComponent', () => {
  let component: jobReactiveFormComponent;
  let fixture: ComponentFixture<jobReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ jobReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(jobReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
