import { ApplicationInterface } from './application.interface';

export interface GroupInterface {
  id: string;
  name: string;
  description: string;
  applications: ApplicationInterface[];
  createdAt?: Date;
  updatedAt?: Date;
  isArchived: boolean;
}
