import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProgramasComponent } from './crear-programas.component';

describe('CrearProgramasComponent', () => {
  let component: CrearProgramasComponent;
  let fixture: ComponentFixture<CrearProgramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearProgramasComponent]
    });
    fixture = TestBed.createComponent(CrearProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
