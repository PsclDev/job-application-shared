import { ApplicationInterface } from './application.interface';
import { BaseInterface } from './base.interface';

export interface GroupInterface extends BaseInterface {
  name: string;
  description: string;
  applications: ApplicationInterface[];
  isArchived: boolean;
}
