import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProgramasComponent } from './detalle-programas.component';


describe('DetalleProgramasComponent', () => {
  let component: DetalleProgramasComponent;
  let fixture: ComponentFixture<DetalleProgramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleProgramasComponent]
    });
    fixture = TestBed.createComponent(DetalleProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
