import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptFeaturesListComponent } from './javascript-features-list.component';

describe('JavascriptFeaturesListComponent', () => {
  let component: JavascriptFeaturesListComponent;
  let fixture: ComponentFixture<JavascriptFeaturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptFeaturesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptFeaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
