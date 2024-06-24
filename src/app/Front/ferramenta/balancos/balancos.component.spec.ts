import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancosComponent } from './balancos.component';

describe('BalancosComponent', () => {
  let component: BalancosComponent;
  let fixture: ComponentFixture<BalancosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalancosComponent]
    });
    fixture = TestBed.createComponent(BalancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
