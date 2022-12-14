export enum StateEnum {
  PENDING = 'PENDING',
  SENT = 'SENT',
  INTERVIEW = 'INTERVIEW',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  NOT_INTERESTED = 'NOT_INTERESTED',
  NO_ANSWER = 'NO_ANSWER',
}

export interface StatusInterface {
  state: StateEnum;
  date: Date;
}
