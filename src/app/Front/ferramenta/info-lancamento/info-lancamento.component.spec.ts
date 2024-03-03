import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLancamentoComponent } from './info-lancamento.component';

describe('InfoLancamentoComponent', () => {
  let component: InfoLancamentoComponent;
  let fixture: ComponentFixture<InfoLancamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoLancamentoComponent]
    });
    fixture = TestBed.createComponent(InfoLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
