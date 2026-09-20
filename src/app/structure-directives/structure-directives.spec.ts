import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirectives } from './structure-directives';

describe('StructureDirectives', () => {
  let component: StructureDirectives;
  let fixture: ComponentFixture<StructureDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureDirectives],
    }).compileComponents();

    fixture = TestBed.createComponent(StructureDirectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
