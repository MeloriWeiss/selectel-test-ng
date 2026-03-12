import { Routes } from '@angular/router';
import { DeliveryWelcomePageComponent } from '../delivery-welcome-feature';
import { DeliveryOptionsPageComponent } from '../delivery-options-feature';
import { DeliveryLayoutComponent } from '../layout';
import { canDeactivateDeliveryOptions } from '../guards';

export const deliveryRoutes: Routes = [
  {
    path: '',
    component: DeliveryLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        component: DeliveryWelcomePageComponent,
      },
      {
        path: 'options',
        component: DeliveryOptionsPageComponent,
        canDeactivate: [canDeactivateDeliveryOptions],
      },
    ],
  },
];
