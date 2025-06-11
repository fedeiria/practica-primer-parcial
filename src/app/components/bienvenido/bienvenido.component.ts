import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { PeliculaListadoComponent } from "../pelicula-listado/pelicula-listado.component";

@Component({
  selector: 'app-bienvenido',
  imports: [CommonModule, NavbarComponent, FooterComponent, PeliculaListadoComponent],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.scss'
})
export class BienvenidoComponent {

}