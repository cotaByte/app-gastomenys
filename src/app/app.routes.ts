import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/component/auth-component/auth-component.component').then(
        m => m.AuthComponentComponent
      ),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/pages/home.component').then(m => m.HomeComponent),
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];
