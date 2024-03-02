import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaUserComponentComponent } from './area-user-component.component';

describe('AreaUserComponentComponent', () => {
  let component: AreaUserComponentComponent;
  let fixture: ComponentFixture<AreaUserComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaUserComponentComponent]
    });
    fixture = TestBed.createComponent(AreaUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
