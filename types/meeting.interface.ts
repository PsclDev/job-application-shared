import { BaseInterface } from './base.interface';
import { PersonInterface } from './person.interface';

export interface MeetingInterface extends BaseInterface {
  title: string;
  date: Date;
  attendees: PersonInterface[];
  notes: string;
}
