import { BaseInterface } from './base.interface';
import { FileInterface } from './file.interface';
import { MeetingInterface } from './meeting.interface';
import { PersonInterface } from './person.interface';
import { StatusInterface } from './status.interface';

export interface ApplicationInterface extends BaseInterface {
  groupId: string;
  name: string;
  description: string;
  company: string;
  contact: PersonInterface;
  jobUrl: string;
  status: StatusInterface[];
  notes: string;
  meetings: MeetingInterface[];
  files: FileInterface[];
  isArchived: boolean;
}
