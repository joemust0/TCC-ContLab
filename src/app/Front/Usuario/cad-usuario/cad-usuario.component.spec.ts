import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadUsuarioComponent } from './cad-usuario.component';

describe('CadUsuarioComponent', () => {
  let component: CadUsuarioComponent;
  let fixture: ComponentFixture<CadUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadUsuarioComponent]
    });
    fixture = TestBed.createComponent(CadUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
