import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSalaComponent} from './crear-sala.component';

describe('CrearSalaComponent', () => {
  let component: CrearSalaComponent;
  let fixture: ComponentFixture<CrearSalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearSalaComponent]
    });
    fixture = TestBed.createComponent(CrearSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

