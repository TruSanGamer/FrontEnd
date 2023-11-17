import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleDocenteComponent } from './detalle-docente.component';


describe('DetalleDocenteComponent', () => {
  let component: DetalleDocenteComponent;
  let fixture: ComponentFixture<DetalleDocenteComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [DetalleDocenteComponent]
    });

    fixture = TestBed.createComponent(DetalleDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
