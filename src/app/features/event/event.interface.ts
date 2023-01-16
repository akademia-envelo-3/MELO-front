import { Maybe } from '@shared/utility-types';

export interface EventCardDTO {
  eventId: number;
  name: string;
  description: string;
  startTime: Date;
  invitedMembersNumber: number;
  mainPhoto: string;
  theme: Theme;
  memberLimit: number;
}

export interface EventDetailsDTO extends Omit<EventCardDTO, 'memberLimit' | 'eventId'> {
  endTime: Date;
  organizer: EmployeeName;
  location: Location;
  periodicType: Maybe<PeriodicType>;
  pollQUestions: Maybe<PollQuestion>;
  hashtags: Maybe<string[]>;
  memberLimit: Maybe<number>;
  invitedMembers: Maybe<EmployeeName[]>;
  attachments: Maybe<Attachment[]>;
  category: Maybe<string>;
}
type EmployeeName = {
  firstName: string;
  lastName: string;
};

type Location = {
  streetName: string;
  streetNumber: number;
  aparmentNumber?: number;
  postalCode: number;
  city: string;
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

type Theme = 'CARD_BROWN' | 'CARD_BLUE' | 'CARD_WHITE' | 'CARD_PURPLE' | 'CARD_GREEN';
