import { MenuType } from '.';

export interface UnitMenuState {
  dateSort: string;
  nameSort: string;
}

export interface EventMenuState extends UnitMenuState {
  creationDate?: string;
  startDate?: string;
}

export type FiltrSortButtonOutput<T extends MenuType> = T extends 'events'
  ? EventMenuState
  : UnitMenuState;
