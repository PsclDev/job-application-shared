import { BaseInterface } from './base.interface';

export interface FileInterface extends BaseInterface {
  applicationId: string;
  groupId: string;
  name: string;
  extension: string;
  data: string;
  size: number;
  mime: string;
}
