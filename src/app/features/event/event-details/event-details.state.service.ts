import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

type EventDetailsState = {
  showEventMembersIcon: boolean;
  showMembers: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class EventDetailsStateService {
  private eventDetailsState$$ = new BehaviorSubject<EventDetailsState>({
    showEventMembersIcon: false,
    showMembers: false,
  });

  constructor() {
    this.eventDetailsState$$.subscribe(console.log);
    if (window.innerWidth < 900) return;
    this.patchState({ showMembers: true });
  }

  get selectShowEventMembersIcon$() {
    return this.eventDetailsState$$.pipe(map(state => state.showEventMembersIcon));
  }

  get selectShowMembers$() {
    return this.eventDetailsState$$.pipe(map(state => state.showMembers));
  }

  get eventDetailsState$() {
    return this.eventDetailsState$$.asObservable();
  }

  canActivateMembersIcon(url: string, viewPortWidth: number) {
    const regex = new RegExp('events/details');
    if (regex.test(url) && viewPortWidth < 900) {
      this.patchState({ showEventMembersIcon: true });
    } else {
      this.patchState({ showEventMembersIcon: false });
    }
  }

  toggleMembersView() {
    console.log('toggle');
    this.patchState({ showMembers: !this.eventDetailsState$$.value.showMembers });
  }

  showMembersView() {
    this.patchState({ showMembers: true });
  }

  hideMembersView() {
    this.patchState({ showMembers: false });
  }

  private patchState(slice: Partial<EventDetailsState>) {
    this.eventDetailsState$$.next({
      ...this.eventDetailsState$$.value,
      ...slice,
    });
  }
}
