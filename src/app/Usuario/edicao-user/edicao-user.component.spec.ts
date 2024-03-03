import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoUserComponent } from './edicao-user.component';

describe('EdicaoUserComponent', () => {
  let component: EdicaoUserComponent;
  let fixture: ComponentFixture<EdicaoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicaoUserComponent]
    });
    fixture = TestBed.createComponent(EdicaoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
