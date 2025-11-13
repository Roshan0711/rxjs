import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushExampleComponent } from './onpush-example.component';

describe('OnpushExampleComponent', () => {
  let component: OnpushExampleComponent;
  let fixture: ComponentFixture<OnpushExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnpushExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
