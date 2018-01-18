import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPointComponent } from './lost-point.component';

describe('LostPointComponent', () => {
  let component: LostPointComponent;
  let fixture: ComponentFixture<LostPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
