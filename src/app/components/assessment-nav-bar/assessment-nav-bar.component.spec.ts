import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentNavBarComponent } from './assessment-nav-bar.component';

describe('AssessmentNavBarComponent', () => {
  let component: AssessmentNavBarComponent;
  let fixture: ComponentFixture<AssessmentNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssessmentNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
