import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassDir } from './ngclass-dir';

describe('NgclassDir', () => {
  let component: NgclassDir;
  let fixture: ComponentFixture<NgclassDir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgclassDir],
    }).compileComponents();

    fixture = TestBed.createComponent(NgclassDir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
