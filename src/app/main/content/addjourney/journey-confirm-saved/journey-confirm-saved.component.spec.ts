import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyConfirmSavedComponent } from './journey-confirm-saved.component';

describe('JourneyConfrimSavedComponent', () => {
  let component: JourneyConfirmSavedComponent;
  let fixture: ComponentFixture<JourneyConfirmSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyConfirmSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyConfirmSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
