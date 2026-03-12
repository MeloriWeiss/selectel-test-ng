import { computed, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationHistoryService {
  #router = inject(Router);
  #historyMaxLength = 5;

  history = signal<string[]>([]);

  lastRoute = computed(() => {
    const history = this.history();
    return history[history.length - 1];
  })

  routerEvents$ = this.#router.events.pipe(
    tap((event) => {
      if (event instanceof NavigationEnd) {
        this.history.update(h => [...h, event.urlAfterRedirects]);
        console.log(event.urlAfterRedirects);
        if (this.history().length > this.#historyMaxLength) {
          this.history.update(h => h.slice(1));
        }
      }
    })
  );

  hasPrevRoutes() {
    return this.history().length > 1;
  }
}
