import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ENDPOINTS } from "@shared/contants";
import { BehaviorSubject } from "rxjs";

type Maybe<T> = T | undefined | null;

type EventDetailsDTO = {
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  organizer: EmployeeName;
  location: Location;
  periodicType: Maybe<PeriodicType>;
  pollQUestions: Maybe<PollQuestion>;
  hashtags: Maybe<string[]>;
  memberLimit: Maybe<number>;
  invitedMembers: Maybe<EmployeeName[]>;
  attachments: Maybe<Attachment[]>;
  mainPhoto: Maybe<string>;
  category: string;
  theme: Theme;
};
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
type PeriodicType = "ONE_WEEK" | "TWO_WEEKS" | "ONE_MONTH";

type PollQuestion = {
  question: string;
  pollId: number;
};

type Attachment = {
  name: string;
  attachmentURL: string;
  attachmentType: undefined;
};

type Theme = "CARD_BROWN" | "CARD_BLUE" | "CARD_WHITE" | "CARD_PURPLE" | "CARD_GREEN";

type EventState = {
  eventDetails: Maybe<EventDetailsDTO>;
};

@Injectable({
  providedIn: "root",
})
export class EventStateService {
  $$eventState = new BehaviorSubject<EventState>({ eventDetails: null });
  constructor(private http: HttpClient) {}

  getEventDetails() {
    this.http.get(ENDPOINTS.eventDetails);
  }
}
