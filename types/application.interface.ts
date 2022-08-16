import { BaseInterface } from './base.interface';
import { FileInterface } from './file.interface';
import { MeetingInterface } from './meeting.interface';
import { PersonInterface } from './person.interface';

export enum StatusEnum {
  PENDING = 'PENDING',
  SEND = 'SEND',
  INTERVIEW = 'INTERVIEW',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  NOT_INTERESTED = 'NOT_INTERESTED',
  NO_ANSWER = 'NO_ANSWER',
}

export interface Status {
  status: StatusEnum;
  date: Date;
}

export interface ApplicationInterface extends BaseInterface {
  groupId: string;
  name: string;
  description: string;
  company: string;
  contact: PersonInterface;
  jobUrl: string;
  status: Status;
  history: Status[];
  notes: string;
  meetings: MeetingInterface[];
  files: FileInterface[];
  isArchived: boolean;
}
