import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyConfrimSavedComponent } from './journey-confrim-saved.component';

describe('JourneyConfrimSavedComponent', () => {
  let component: JourneyConfrimSavedComponent;
  let fixture: ComponentFixture<JourneyConfrimSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyConfrimSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyConfrimSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
