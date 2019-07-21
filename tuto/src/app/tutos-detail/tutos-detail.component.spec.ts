import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutosDetailComponent } from './tutos-detail.component';

describe('TutosDetailComponent', () => {
  let component: TutosDetailComponent;
  let fixture: ComponentFixture<TutosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
