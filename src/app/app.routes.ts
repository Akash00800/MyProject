import { Routes } from '@angular/router';
import { DataListComponent } from './components/data-list/data-list.component';
import { AddDataComponent } from './components/add-data/add-data.component';

export const routes: Routes = [
  { path: '', redirectTo: '/data-list', pathMatch: 'full' },
  { path: 'data-list', component: DataListComponent },
  { path: 'add', component: AddDataComponent },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./components/edit-data/edit-data.component').then(m => m.EditDataComponent)
  },
  { path: '**', redirectTo: '/data-list' },
];
