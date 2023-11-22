import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCoordinadorComponent } from './detalle-coordinador.component';

describe('DetalleCoordinadorComponent', () => {
  let component: DetalleCoordinadorComponent;
  let fixture: ComponentFixture<DetalleCoordinadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCoordinadorComponent]
    });
    fixture = TestBed.createComponent(DetalleCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
