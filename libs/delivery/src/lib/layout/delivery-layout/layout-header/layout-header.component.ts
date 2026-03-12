import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { DeliveryService } from '@st/data-access';
import { NavigationHistoryService } from '@st/shared';
import { deliveryNav } from '../../../consts/delivery-nav';

@Component({
  selector: 'st-layout-header',
  imports: [],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHeaderComponent {
  #deliveryService = inject(DeliveryService);
  #navigationHistoryService = inject(NavigationHistoryService);

  totalSum = this.#deliveryService.totalSum;
  selectedOptions = this.#deliveryService.selectedOptions;

  history = this.#navigationHistoryService.history;
  lastRoute = this.#navigationHistoryService.lastRoute;

  deliveryNav = deliveryNav;

  currentPath = computed(() => {
    const currentRoute = this.deliveryNav.find(
      (item) => `/delivery/${item.url}` === this.lastRoute(),
    );
    return currentRoute ? currentRoute.name : '';
  });
}
