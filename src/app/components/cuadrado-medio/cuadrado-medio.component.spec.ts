import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadradoMedioComponent } from './cuadrado-medio.component';

describe('CuadradoMedioComponent', () => {
  let component: CuadradoMedioComponent;
  let fixture: ComponentFixture<CuadradoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadradoMedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadradoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
