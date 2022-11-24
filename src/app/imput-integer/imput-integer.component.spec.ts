import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputIntegerComponent } from './imput-integer.component';

describe('ImputIntegerComponent', () => {
  let component: ImputIntegerComponent;
  let fixture: ComponentFixture<ImputIntegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImputIntegerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImputIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
