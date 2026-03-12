import { NameValue } from '../../shared';

export interface DeliveryOption {
  id: number;
  name: string;
  info: NameValue[];
  totalSum: number;
  code: string;
  checked: boolean;
}
