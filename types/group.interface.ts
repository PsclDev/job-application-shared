import { ApplicationInterface } from './application.interface';
import { BaseInterface } from './base.interface';
import { FileInterface } from './file.interface';

export interface GroupInterface extends BaseInterface {
  name: string;
  description: string;
  applications: ApplicationInterface[];
  files: FileInterface[];
  isArchived: boolean;
}
