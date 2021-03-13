import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversaMultiplicativoComponent } from './inversa-multiplicativo.component';

describe('InversaMultiplicativoComponent', () => {
  let component: InversaMultiplicativoComponent;
  let fixture: ComponentFixture<InversaMultiplicativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InversaMultiplicativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InversaMultiplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
