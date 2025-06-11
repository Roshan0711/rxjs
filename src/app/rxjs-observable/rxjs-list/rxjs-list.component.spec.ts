import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsListComponent } from './rxjs-list.component';

describe('RxjsListComponent', () => {
  let component: RxjsListComponent;
  let fixture: ComponentFixture<RxjsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
