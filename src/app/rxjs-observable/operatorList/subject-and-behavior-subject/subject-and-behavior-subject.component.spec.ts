import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAndBehaviorSubjectComponent } from './subject-and-behavior-subject.component';

describe('SubjectAndBehaviorSubjectComponent', () => {
  let component: SubjectAndBehaviorSubjectComponent;
  let fixture: ComponentFixture<SubjectAndBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAndBehaviorSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAndBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
