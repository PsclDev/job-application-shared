import { BaseInterface } from './base.interface';

export interface FileInterface extends BaseInterface {
  fileName: string;
  fileSize: number;
  mimeType: string;
}
