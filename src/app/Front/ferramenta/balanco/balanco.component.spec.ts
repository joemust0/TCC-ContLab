import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancoComponent } from './balanco.component';

describe('BalancoComponent', () => {
  let component: BalancoComponent;
  let fixture: ComponentFixture<BalancoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalancoComponent]
    });
    fixture = TestBed.createComponent(BalancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
