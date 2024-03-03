import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirBalancoComponent } from './exibir-balanco.component';

describe('ExibirBalancoComponent', () => {
  let component: ExibirBalancoComponent;
  let fixture: ComponentFixture<ExibirBalancoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibirBalancoComponent]
    });
    fixture = TestBed.createComponent(ExibirBalancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
