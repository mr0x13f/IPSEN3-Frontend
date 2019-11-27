import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentmenuComponent } from './contentmenu.component';

describe('ContentmenuComponent', () => {
  let component: ContentmenuComponent;
  let fixture: ComponentFixture<ContentmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
