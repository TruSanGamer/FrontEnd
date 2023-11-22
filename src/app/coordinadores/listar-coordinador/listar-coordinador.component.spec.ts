import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCoordinadorComponent } from './listar-coordinador.component';

describe('ListarCoordinadorComponent', () => {
  let component: ListarCoordinadorComponent;
  let fixture: ComponentFixture<ListarCoordinadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCoordinadorComponent]
    });
    fixture = TestBed.createComponent(ListarCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
