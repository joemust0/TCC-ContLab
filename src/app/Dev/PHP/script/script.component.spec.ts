import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptComponent } from './script.component';

describe('ScriptComponent', () => {
  let component: ScriptComponent;
  let fixture: ComponentFixture<ScriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScriptComponent]
    });
    fixture = TestBed.createComponent(ScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
