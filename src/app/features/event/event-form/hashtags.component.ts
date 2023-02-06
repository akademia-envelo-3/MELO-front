import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { inject } from '@angular/core';
import { SnackBarService } from '@shared/services/snack-bar.service';

@Component({
  selector: 'app-hashtags',
  templateUrl: 'hashtag.component.html',
  styles: [
    `
      :host {
        display: inline-block;
        max-width: min(88vw, 500px);
      }
      input {
        min-height: 56px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HashtagsComponent {
  @ViewChild(MatAutocompleteTrigger)
  auto!: MatAutocompleteTrigger;
  @ViewChild('hashtagInput')
  hashtagInput!: ElementRef<HTMLInputElement>;
  private snackBarService = inject(SnackBarService);
  private maxChars = 50;
  private maxHashtagsCount = 100;
  maxAutocompleteOptions = 5;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  hashtagCtrl = new FormControl('', Validators.maxLength(this.maxChars));
  filteredHashtags$: Observable<string[]>;
  addedHashtags: string[] = [];
  allHashtags: string[] = [
    'Impreza',
    'Piwo',
    'Piłkarzyki',
    'Pizza',
    'Pizza 2',
    'Pizza 3',
    'Pizza 4',
    'Pizza 5',
    'Karaoke',
    'Bilard',
    'Urodziny',
    'BaaaaaaaaaardzoDłuuuuuugiHashtagAwogóletoooooooooo',
    '한국말',
  ];

  constructor() {
    this.filteredHashtags$ = this.hashtagCtrl.valueChanges.pipe(
      startWith(null),
      map((hashtag: string | null) =>
        hashtag ? this._filter(hashtag) : this.allHashtags.slice()
      )
    );
  }

  addHashtag(event: MatChipInputEvent): void {
    if (this.addedHashtags.length >= this.maxHashtagsCount) {
      this.maxHashtagCountInfo();
    } else {
      const value = (event.value || '').trim().slice(0, this.maxChars);

      if (value.length >= this.maxChars) {
        this.maxCharsInfo();
      }
      // Add hashtag
      if (value && !this.addedHashtags.includes(value) && !this.auto.panelOpen) {
        this.addedHashtags.push(value);
      } else if (this.addedHashtags.includes(value)) {
        this.hashtagAlreadyAddedInfo(value);
      }

      // Clear the input value
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      event.chipInput!.clear();
      this.hashtagCtrl.setValue('');
    }
  }

  remove(hashtag: string): void {
    const index = this.addedHashtags.indexOf(hashtag);

    if (index >= 0) {
      this.addedHashtags.splice(index, 1);
    }
    this.auto.closePanel();
  }

  edit(hashtag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(hashtag);
      return;
    }

    // Edit existing hashtags
    const index = this.addedHashtags.indexOf(hashtag);
    if (index >= 0 && !this.addedHashtags.includes(value)) {
      if (value.length > this.maxChars) this.maxCharsInfo();
      this.addedHashtags[index] = value.slice(0, this.maxChars);
    } else {
      this.hashtagAlreadyAddedInfo(value);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.addedHashtags.length >= this.maxHashtagsCount) {
      this.maxHashtagCountInfo();
    } else {
      const value = event.option.viewValue;
      if (!this.addedHashtags.includes(value)) {
        this.hashtagInput.nativeElement.value = '';
        this.hashtagCtrl.setValue('');
        this.addedHashtags.push(value);
      } else {
        this.hashtagAlreadyAddedInfo(value);
      }
    }
  }

  private _filter(value: string): string[] {
    const lowerCaseValue = value.toLowerCase();

    return this.allHashtags.filter(hashtag =>
      hashtag.toLowerCase().includes(lowerCaseValue)
    );
  }
  private hashtagAlreadyAddedInfo(value: string) {
    this.snackBarService.openSnackBar(`Hashtag o treści "${value}" został już dodany`);
  }
  private maxHashtagCountInfo() {
    this.snackBarService.openSnackBar(
      `Dopuszczalna liczba hashtagów to ${this.maxHashtagsCount}`
    );
  }
  private maxCharsInfo() {
    this.snackBarService.openSnackBar(`Maksymalna liczba znaków to ${this.maxChars}`);
  }
}
