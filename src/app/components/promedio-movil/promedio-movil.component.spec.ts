import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedioMovilComponent } from './promedio-movil.component';

describe('PromedioMovilComponent', () => {
  let component: PromedioMovilComponent;
  let fixture: ComponentFixture<PromedioMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromedioMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromedioMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
