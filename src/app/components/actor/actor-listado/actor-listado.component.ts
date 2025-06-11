import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as data from '../../../../assets/actors.json';
import { Iactor } from '../../../interfaces/iactor';
import { FilterMoviesPipe } from '../../../pipes/filter-movies.pipe';
import { FooterComponent } from "../../footer/footer.component";
import { ActorNavbarComponent } from "../actor-navbar/actor-navbar.component";

@Component({
  selector: 'app-actor-listado',
  imports: [CommonModule, FilterMoviesPipe, FormsModule, FooterComponent, ActorNavbarComponent],
  templateUrl: './actor-listado.component.html',
  styleUrl: './actor-listado.component.scss'
})
export class ActorListadoComponent implements OnInit {

  searchText: string = '';
  actors: Iactor[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getActorsData();
  }

  getJsonActosData() {
    return (data as any).actor;
  }

  getActorsData() {
    this.actors = this.getJsonActosData().map((actor: Iactor) => {
      return {
        id: actor.id,
        name: actor.name,
        age: actor.age,
        movies: actor.movies
      };
    });
  }
}
