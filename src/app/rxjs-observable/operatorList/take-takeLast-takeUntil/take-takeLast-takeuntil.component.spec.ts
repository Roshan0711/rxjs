import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeTakeLastTakeUntilComponent } from './take-takeLast-takeuntil.component';

describe('TakeTakeLastTakeUntilComponent', () => {
  let component: TakeTakeLastTakeUntilComponent;
  let fixture: ComponentFixture<TakeTakeLastTakeUntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeTakeLastTakeUntilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeTakeLastTakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
