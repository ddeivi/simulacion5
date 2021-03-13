import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaEsperaComponent } from './linea-espera.component';

describe('LineaEsperaComponent', () => {
  let component: LineaEsperaComponent;
  let fixture: ComponentFixture<LineaEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaEsperaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
