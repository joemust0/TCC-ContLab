import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonologComponent } from './monolog.component';

describe('MonologComponent', () => {
  let component: MonologComponent;
  let fixture: ComponentFixture<MonologComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonologComponent]
    });
    fixture = TestBed.createComponent(MonologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
