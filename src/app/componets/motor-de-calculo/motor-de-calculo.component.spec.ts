import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorDeCalculoComponent } from './motor-de-calculo.component';

describe('MotorDeCalculoComponent', () => {
  let component: MotorDeCalculoComponent;
  let fixture: ComponentFixture<MotorDeCalculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorDeCalculoComponent]
    });
    fixture = TestBed.createComponent(MotorDeCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
