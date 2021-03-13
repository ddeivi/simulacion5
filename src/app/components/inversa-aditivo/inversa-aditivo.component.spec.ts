import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversaAditivoComponent } from './inversa-aditivo.component';

describe('InversaAditivoComponent', () => {
  let component: InversaAditivoComponent;
  let fixture: ComponentFixture<InversaAditivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InversaAditivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InversaAditivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
