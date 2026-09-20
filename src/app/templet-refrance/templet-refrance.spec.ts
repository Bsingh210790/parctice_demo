import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletRefrance } from './templet-refrance';

describe('TempletRefrance', () => {
  let component: TempletRefrance;
  let fixture: ComponentFixture<TempletRefrance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempletRefrance],
    }).compileComponents();

    fixture = TestBed.createComponent(TempletRefrance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
