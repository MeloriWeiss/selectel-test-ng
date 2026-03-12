import { HasChanges } from '@st/data-access';

export const canDeactivateDeliveryOptions = (component: HasChanges) => {
  if (component.hasChanges) {
    return confirm('У вас есть несохранённые изменения. Покинуть страницу?');
  }

  return true;
}
