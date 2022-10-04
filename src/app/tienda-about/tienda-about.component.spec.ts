import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaAboutComponent } from './tienda-about.component';

describe('TiendaAboutComponent', () => {
  let component: TiendaAboutComponent;
  let fixture: ComponentFixture<TiendaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
