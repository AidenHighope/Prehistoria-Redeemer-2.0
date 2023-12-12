import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TackGenComponent } from './tack-gen.component';

describe('TackGenComponent', () => {
  let component: TackGenComponent;
  let fixture: ComponentFixture<TackGenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TackGenComponent]
    });
    fixture = TestBed.createComponent(TackGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
