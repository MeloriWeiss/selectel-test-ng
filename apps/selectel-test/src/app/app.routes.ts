import { Routes } from '@angular/router';
import { BaseLayoutComponent } from '@st/layout';
import { canActivateAuth } from '@st/auth';
import { deliveryRoutes } from '@st/delivery';
import { ErrorComponent } from '@st/shared';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'delivery',
        pathMatch: 'full',
      },
      {
        path: 'delivery',
        children: deliveryRoutes,
      },
    ],
    canActivate: [canActivateAuth],
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
