import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstucesDetailComponent } from './astuces-detail.component';

describe('AstucesDetailComponent', () => {
  let component: AstucesDetailComponent;
  let fixture: ComponentFixture<AstucesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstucesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstucesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
