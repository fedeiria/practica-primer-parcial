import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPeliculaComponent } from './tabla-pelicula.component';

describe('TablaPeliculaComponent', () => {
  let component: TablaPeliculaComponent;
  let fixture: ComponentFixture<TablaPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPeliculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
