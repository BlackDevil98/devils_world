import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevilsComponent } from './devils.component';

describe('DevilsComponent', () => {
  let component: DevilsComponent;
  let fixture: ComponentFixture<DevilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
