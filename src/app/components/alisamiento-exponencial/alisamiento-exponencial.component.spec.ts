import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlisamientoExponencialComponent } from './alisamiento-exponencial.component';

describe('AlisamientoExponencialComponent', () => {
  let component: AlisamientoExponencialComponent;
  let fixture: ComponentFixture<AlisamientoExponencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlisamientoExponencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlisamientoExponencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
