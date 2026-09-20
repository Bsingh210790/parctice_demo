import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassDir } from './ng-class-dir';

describe('NgClassDir', () => {
  let component: NgClassDir;
  let fixture: ComponentFixture<NgClassDir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassDir],
    }).compileComponents();

    fixture = TestBed.createComponent(NgClassDir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
