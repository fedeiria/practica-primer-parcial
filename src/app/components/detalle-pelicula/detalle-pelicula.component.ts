import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detalle-pelicula',
  imports: [],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.scss'
})
export class DetallePeliculaComponent implements OnInit, OnDestroy {

  data: any;
  private subscription!: Subscription;

  @Input() showComponent: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.data$.subscribe(data => {
      this.data = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
