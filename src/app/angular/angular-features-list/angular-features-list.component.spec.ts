import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFeaturesListComponent } from './angular-features-list.component';

describe('AngularFeaturesListComponent', () => {
  let component: AngularFeaturesListComponent;
  let fixture: ComponentFixture<AngularFeaturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFeaturesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFeaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
