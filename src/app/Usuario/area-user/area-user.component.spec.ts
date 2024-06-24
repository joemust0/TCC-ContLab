import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaUserComponent } from './area-user.component';

describe('AreaUserComponent', () => {
  let component: AreaUserComponent;
  let fixture: ComponentFixture<AreaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaUserComponent]
    });
    fixture = TestBed.createComponent(AreaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
