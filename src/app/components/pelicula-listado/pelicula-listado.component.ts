import { Component } from '@angular/core';
import { TablaPeliculaComponent } from "../tabla-pelicula/tabla-pelicula.component";

@Component({
  selector: 'app-pelicula-listado',
  imports: [TablaPeliculaComponent],
  templateUrl: './pelicula-listado.component.html',
  styleUrl: './pelicula-listado.component.scss'
})
export class PeliculaListadoComponent {

}
