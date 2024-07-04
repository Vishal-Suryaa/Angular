import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidasComponent } from './midas.component';

describe('MidasComponent', () => {
  let component: MidasComponent;
  let fixture: ComponentFixture<MidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
