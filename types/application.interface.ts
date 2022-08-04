export interface ApplicationInterface {
  id: string;
  groupId: string;
  name: string;
  description: string;
  company: string;
  contact: string;
  jobUrl: string;
  status: string;
  notes: string;
  files: string[];
  createdAt?: Date;
  updatedAt?: Date;
  isArchived: boolean;
}
