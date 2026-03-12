import { computed, Injectable, signal } from '@angular/core';
import { of } from 'rxjs';
import { DeliveryOption } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  selectedOptions = signal<DeliveryOption[]>([]);

  totalSum = computed(() => {
    return this.selectedOptions().reduce((acc, option) => {
      acc += option.totalSum;
      return acc;
    }, 0);
  })

  getOptions() {
    return of([
      {
        id: 1,
        name: 'Доставка',
        info: [
          {
            name: 'Налоги',
            value: 100,
          },
          {
            name: 'Сервис',
            value: 400,
          },
        ],
        totalSum: 500,
        code: 'delivery',
        checked: false,
      },
      {
        id: 2,
        name: 'Самовывоз',
        info: [
          {
            name: 'Стоимость',
            value: 500,
          }
        ],
        totalSum: 500,
        code: 'self',
        checked: true,
      },
      {
        id: 3,
        name: 'Хранение',
        info: [
          {
            name: 'Стоимость',
            value: 230,
          }
        ],
        totalSum: 230,
        code: 'store',
        checked: false,
      }
    ] as DeliveryOption[]);
  }
}
