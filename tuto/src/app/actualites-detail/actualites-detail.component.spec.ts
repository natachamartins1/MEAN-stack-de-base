import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitesDetailComponent } from './actualites-detail.component';

describe('ActualitesDetailComponent', () => {
  let component: ActualitesDetailComponent;
  let fixture: ComponentFixture<ActualitesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualitesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualitesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
