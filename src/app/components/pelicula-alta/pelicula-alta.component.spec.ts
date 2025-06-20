import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaAltaComponent } from './pelicula-alta.component';

describe('PeliculaAltaComponent', () => {
  let component: PeliculaAltaComponent;
  let fixture: ComponentFixture<PeliculaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
