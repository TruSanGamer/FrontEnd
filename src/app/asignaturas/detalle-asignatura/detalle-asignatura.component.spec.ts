import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAsignaturaComponent } from './detalle-asignatura.component';


describe('DetalleAsignaturaComponent', () => {
  let component: DetalleAsignaturaComponent;
  let fixture: ComponentFixture<DetalleAsignaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleAsignaturaComponent]
    });
    fixture = TestBed.createComponent(DetalleAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
