import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureEditComponent } from './candidature-edit.component';

describe('CandidatureEditComponent', () => {
  let component: CandidatureEditComponent;
  let fixture: ComponentFixture<CandidatureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
