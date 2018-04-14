import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClase3Component } from './lista-clase3.component';

describe('ListaClase3Component', () => {
  let component: ListaClase3Component;
  let fixture: ComponentFixture<ListaClase3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaClase3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
