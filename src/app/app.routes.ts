import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full',
        loadComponent: () => import('./components/bienvenido/bienvenido.component').then(c => c.BienvenidoComponent) },
    { path: 'bienvenido',
        loadComponent: () => import('./components/bienvenido/bienvenido.component').then(c => c.BienvenidoComponent) },
    { path: 'actor-listado',
        loadComponent: () => import('./components/actor/actor-listado/actor-listado.component').then(c => c.ActorListadoComponent) },
    { path: 'actor-alta',
        loadComponent: () => import('./components/actor/actor-alta/actor-alta.component').then(c => c.ActorAltaComponent) },
    { path: '**',
        loadComponent: () => import('./components/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
    }
];
