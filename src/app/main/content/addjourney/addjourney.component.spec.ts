import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjourneyComponent } from './addjourney.component';

describe('AddjourneyComponent', () => {
  let component: AddjourneyComponent;
  let fixture: ComponentFixture<AddjourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
