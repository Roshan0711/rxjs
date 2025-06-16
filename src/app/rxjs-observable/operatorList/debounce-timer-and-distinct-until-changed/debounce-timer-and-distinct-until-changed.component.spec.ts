import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimerAndDistinctUntilChangedComponent } from './debounce-timer-and-distinct-until-changed.component';

describe('DebounceTimerAndDistinctUntilChangedComponent', () => {
  let component: DebounceTimerAndDistinctUntilChangedComponent;
  let fixture: ComponentFixture<DebounceTimerAndDistinctUntilChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceTimerAndDistinctUntilChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceTimerAndDistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
