import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosdeconversacionesComponent } from './listadosdeconversaciones.component';

describe('ListadosdeconversacionesComponent', () => {
  let component: ListadosdeconversacionesComponent;
  let fixture: ComponentFixture<ListadosdeconversacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadosdeconversacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadosdeconversacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
