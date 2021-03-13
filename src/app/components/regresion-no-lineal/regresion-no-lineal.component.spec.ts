import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresionNoLinealComponent } from './regresion-no-lineal.component';

describe('RegresionNoLinealComponent', () => {
  let component: RegresionNoLinealComponent;
  let fixture: ComponentFixture<RegresionNoLinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegresionNoLinealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegresionNoLinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
