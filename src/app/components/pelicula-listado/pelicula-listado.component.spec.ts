import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaListadoComponent } from './pelicula-listado.component';

describe('PeliculaListadoComponent', () => {
  let component: PeliculaListadoComponent;
  let fixture: ComponentFixture<PeliculaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
