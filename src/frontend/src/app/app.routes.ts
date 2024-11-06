import { Routes } from '@angular/router';
import { canMatchFeature } from '@shared';

export const routes: Routes = [
  {
    path: 'demos',
    canMatch: [canMatchFeature('wip')],
    loadChildren: () =>
      import('./demos/demos.routes').then((c) => c.DEMOS_ROUTES),
  },
  {
    path: 'banking',
    loadChildren: () =>
      import('./banking/banking.routes').then((b) => b.BANKING_ROUTES),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.routes').then((b) => b.COUNTER_ROUTES),
  },
];
