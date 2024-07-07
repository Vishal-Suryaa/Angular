import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentBaseComponent } from './assessment-base.component';

describe('AssessmentBaseComponent', () => {
  let component: AssessmentBaseComponent;
  let fixture: ComponentFixture<AssessmentBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssessmentBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
