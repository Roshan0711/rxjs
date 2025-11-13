import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneExampleComponent } from './zone-example.component';

describe('ZoneExampleComponent', () => {
  let component: ZoneExampleComponent;
  let fixture: ComponentFixture<ZoneExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
