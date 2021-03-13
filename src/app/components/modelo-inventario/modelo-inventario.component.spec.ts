import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloInventarioComponent } from './modelo-inventario.component';

describe('ModeloInventarioComponent', () => {
  let component: ModeloInventarioComponent;
  let fixture: ComponentFixture<ModeloInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
