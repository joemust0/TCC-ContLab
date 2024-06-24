import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosTesteComponent } from './lancamentos-teste.component';

describe('LancamentosTesteComponent', () => {
  let component: LancamentosTesteComponent;
  let fixture: ComponentFixture<LancamentosTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LancamentosTesteComponent]
    });
    fixture = TestBed.createComponent(LancamentosTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
