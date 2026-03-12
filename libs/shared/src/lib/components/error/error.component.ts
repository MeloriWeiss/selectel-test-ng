import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationHistoryService } from '@st/shared';

@Component({
  selector: 'st-error',
  imports: [RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  #navigationHistoryService = inject(NavigationHistoryService);

  history = this.#navigationHistoryService.history;

  goBackRoute = computed(() => {
    const history = this.history();

    return history[history.length - 2] ?? '/';
  })
}
