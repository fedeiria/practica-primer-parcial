import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Ipelicula } from '../../interfaces/ipelicula';
import { DataService } from '../../services/data.service';
import { DetallePeliculaComponent } from "../detalle-pelicula/detalle-pelicula.component";
import { FilterMoviesPipe } from "../../pipes/filter-movies.pipe";

@Component({
  selector: 'app-tabla-pelicula',
  imports: [CommonModule, DetallePeliculaComponent, FilterMoviesPipe, FormsModule],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.scss'
})
export class TablaPeliculaComponent {

  searchText: string = '';
  peliculas: Ipelicula[] = [];
  isRowSelected: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getMovieData();
  }

  getMovieData(): any {
    this.requestMovieApiData().then((movie: any) => {
      this.peliculas = movie.map((data: any) => {
        return {
          id: data.id,
          nombre: data.title,
          tipo: data.genres,
          fechaEstreno: data.releaseDate,
          espectadores: Math.floor(Math.random() * 1500000),
          fotoPelicula: data.poster
        };
      });
    }).catch(error => {
      console.log("getMovieDataError: ", error);
    });
  }

  async requestMovieApiData(): Promise<any> {
    try {
      const response: any = await fetch('https://api-movies.fly.dev/api/v1/movies');
      const data: any = await response.json();
      return data;
    }
    catch (error) {
      console.log("requestMovieApiDataError: ", error);
    }
  }

  getRowData(row: any): void {
    this.dataService.sendData(row);
    this.isRowSelected = true;
  }
}