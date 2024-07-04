import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisecComponent } from './raisec.component';

describe('RaisecComponent', () => {
  let component: RaisecComponent;
  let fixture: ComponentFixture<RaisecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaisecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
