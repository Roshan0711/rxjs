import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipAndForkJoinComponent } from './zip-and-fork-join.component';

describe('ZipAndForkJoinComponent', () => {
  let component: ZipAndForkJoinComponent;
  let fixture: ComponentFixture<ZipAndForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipAndForkJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipAndForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
