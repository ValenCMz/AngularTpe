import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemeraListComponent } from './remera-list.component';

describe('RemeraListComponent', () => {
  let component: RemeraListComponent;
  let fixture: ComponentFixture<RemeraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemeraListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemeraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
