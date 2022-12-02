import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRemerasComponent } from './crear-remeras.component';

describe('CrearRemerasComponent', () => {
  let component: CrearRemerasComponent;
  let fixture: ComponentFixture<CrearRemerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRemerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRemerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
