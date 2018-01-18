import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveMissionComponent } from './resolve-mission.component';

describe('ResolveMissionComponent', () => {
  let component: ResolveMissionComponent;
  let fixture: ComponentFixture<ResolveMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolveMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
