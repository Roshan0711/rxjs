import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDefinitionComponent } from './angular-definition.component';

describe('AngularDefinitionComponent', () => {
  let component: AngularDefinitionComponent;
  let fixture: ComponentFixture<AngularDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
