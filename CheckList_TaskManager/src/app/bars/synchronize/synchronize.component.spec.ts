import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronizeComponent } from './synchronize.component';

describe('SynchronizeComponent', () => {
  let component: SynchronizeComponent;
  let fixture: ComponentFixture<SynchronizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynchronizeComponent]
    });
    fixture = TestBed.createComponent(SynchronizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
