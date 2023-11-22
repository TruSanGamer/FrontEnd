import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCoordinadorComponent } from './crear-coordinador.component';

describe('CrearCoordinadorComponent', () => {
  let component: CrearCoordinadorComponent;
  let fixture: ComponentFixture<CrearCoordinadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCoordinadorComponent]
    });
    fixture = TestBed.createComponent(CrearCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
