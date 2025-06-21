import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplyComponent } from './share-reply.component';

describe('ShareReplyComponent', () => {
  let component: ShareReplyComponent;
  let fixture: ComponentFixture<ShareReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
