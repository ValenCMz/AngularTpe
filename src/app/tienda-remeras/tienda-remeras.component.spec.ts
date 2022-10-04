import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaRemerasComponent } from './tienda-remeras.component';

describe('TiendaRemerasComponent', () => {
  let component: TiendaRemerasComponent;
  let fixture: ComponentFixture<TiendaRemerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaRemerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaRemerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
