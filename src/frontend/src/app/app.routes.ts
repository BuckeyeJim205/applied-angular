import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.routes').then((c) => c.DEMOS_ROUTES),
  },
];
