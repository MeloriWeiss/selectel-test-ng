import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { DeliveryOption, DeliveryService, HasChanges } from '@st/data-access';
import { debounceTime, firstValueFrom } from 'rxjs';
import {
  FormControl,
  FormRecord,
  ReactiveFormsModule,
} from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'st-delivery-options-page',
  imports: [ReactiveFormsModule, KeyValuePipe],
  templateUrl: './delivery-options-page.component.html',
  styleUrl: './delivery-options-page.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryOptionsPageComponent implements HasChanges {
  #cdr = inject(ChangeDetectorRef);
  #deliveryService = inject(DeliveryService);

  options: DeliveryOption[] = [];
  hasChanges = false;

  optionsForm = new FormRecord<FormControl<boolean | null>>({});

  constructor() {
    this.getOptions().then();
    this.listenOptionsChanges();
  }

  async getOptions() {
    const options = await firstValueFrom(this.#deliveryService.getOptions());

    for (const option of options) {
      this.optionsForm.addControl(option.code, new FormControl(option.checked));
    }

    this.options = options;
    this.setSelectedOptions(this.optionsForm.value);

    this.#cdr.markForCheck();
  }

  listenOptionsChanges() {
    this.optionsForm.valueChanges
      .pipe(debounceTime(1), takeUntilDestroyed())
      .subscribe((formValue) => {
        this.hasChanges = true;
        this.setSelectedOptions(formValue);
      });
  }

  setSelectedOptions(formValue: Record<string, unknown>) {
    const selectedOptions: DeliveryOption[] = [];

    Object.entries(formValue).forEach(([_, value], index) => {
      const selectedOption = this.options[index];

      if (!selectedOption || !value) return;

      selectedOptions.push(selectedOption);
    });

    this.#deliveryService.selectedOptions.set(selectedOptions);
  }

  sort = () => 0;
}
