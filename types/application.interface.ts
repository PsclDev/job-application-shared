import { BaseInterface } from './base.interface';
import { MeetingInterface } from './meeting.interface';
import { PersonInterface } from './person.interface';

export interface ApplicationInterface extends BaseInterface {
  groupId: string;
  name: string;
  description: string;
  company: string;
  contact: PersonInterface;
  jobUrl: string;
  status: string;
  notes: string;
  meetings: MeetingInterface[];
  files: string[];
  isArchived: boolean;
}
