import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUploadComponent } from './ng-upload.component';

describe('NgUploadComponent', () => {
  let component: NgUploadComponent;
  let fixture: ComponentFixture<NgUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
