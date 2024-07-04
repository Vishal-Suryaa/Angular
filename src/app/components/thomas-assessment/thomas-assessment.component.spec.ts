import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomasAssessmentComponent } from './thomas-assessment.component';

describe('ThomasAssessmentComponent', () => {
  let component: ThomasAssessmentComponent;
  let fixture: ComponentFixture<ThomasAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThomasAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThomasAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
