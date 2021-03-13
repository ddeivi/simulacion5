import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongruencialAditivoComponent } from './congruencial-aditivo.component';

describe('CongruencialAditivoComponent', () => {
  let component: CongruencialAditivoComponent;
  let fixture: ComponentFixture<CongruencialAditivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongruencialAditivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongruencialAditivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
