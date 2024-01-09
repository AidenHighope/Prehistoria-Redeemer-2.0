import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingComponent } from './breeding.component';

describe('BreedingComponent', () => {
  let component: BreedingComponent;
  let fixture: ComponentFixture<BreedingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreedingComponent]
    });
    fixture = TestBed.createComponent(BreedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
