import { BaseInterface } from './base.interface';

export interface FileInterface extends BaseInterface {
  name: string;
  size: number;
  mime: string;
}
