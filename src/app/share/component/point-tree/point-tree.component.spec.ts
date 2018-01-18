import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTreeComponent } from './point-tree.component';

describe('PointTreeComponent', () => {
  let component: PointTreeComponent;
  let fixture: ComponentFixture<PointTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
