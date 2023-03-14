import { Maybe } from '@shared/utility-types';

export interface EventCardDTO {
  eventId: number;
  name: string;
  description: string;
  startTime: Date;
  invitedMembersNumber: number;
  mainPhoto: string;
  theme: Theme;
  memberLimit?: number;
}

export interface EventDetailsDTO extends Omit<EventCardDTO, 'memberLimit' | 'eventId'> {
  endTime: Date;
  organizer: Employee;
  location: Location;
  periodicType: Maybe<PeriodicType>;
  pollQuestions: Maybe<PollQuestion[]>;
  hashtags: Maybe<string[]>;
  memberLimit: Maybe<number>;
  invitedMembers: Maybe<Employee[]>;
  attachments: Maybe<Attachment[]>;
  category: Maybe<string>;
}
export type Employee = {
  firstName: string;
  lastName: string;
  id: string;
};

type Location = {
  streetName: string;
  streetNumber: number;
  aparmentNumber?: number;
  postalCode: number;
  city: string;
  lat: number;
  long: number;
};
type PeriodicType = 'ONE_WEEK' | 'TWO_WEEKS' | 'ONE_MONTH';

type PollQuestion = {
  question: string;
  pollId: number;
};

type Attachment = {
  name: string;
  attachmentURL: string;
  attachmentType: undefined;
};

export type Theme = 'brown' | 'blue' | 'white' | 'purple' | 'green';
