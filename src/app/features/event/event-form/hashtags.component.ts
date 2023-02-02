import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  separatorKeysCodes: number[] = [ENTER, COMMA];
  hashtagCtrl = new FormControl('', [Validators.maxLength(50)]);
  filteredHashtags$: Observable<string[]>;
  hashtags: string[] = [];
  //temporary data for testing
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
  ];

  @ViewChild('hashtagInput')
  hashtagInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredHashtags$ = this.hashtagCtrl.valueChanges.pipe(
      startWith('null'),
      map((hashtag: string | null) =>
        hashtag ? this._filter(hashtag) : this.allHashtags.slice()
      )
    );
  }

  addHashtag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add hashtag
    if (value && !this.hashtags.includes(value)) {
      this.hashtags.push(value);
    }

    // Clear the input value
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    event.chipInput!.clear();

    this.hashtagCtrl.setValue(null);
  }

  remove(hashtag: string): void {
    const index = this.hashtags.indexOf(hashtag);

    if (index >= 0) {
      this.hashtags.splice(index, 1);
    }
  }

  edit(hashtag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();
    // Remove hashtag if it no longer has a name
    if (!value) {
      this.remove(hashtag);
      return;
    }

    // Edit existing fruit
    const index = this.hashtags.indexOf(hashtag);
    if (index >= 0) {
      this.hashtags[index] = value;
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.hashtags.includes(event.option.viewValue)) {
      this.hashtags.push(event.option.viewValue);
      this.hashtagInput.nativeElement.value = '';
      this.hashtagCtrl.setValue(null);
    }
  }

  private _filter(value: string): string[] {
    const lowerCaseValue = value.toLowerCase();

    return this.allHashtags.filter(hashtag =>
      hashtag.toLowerCase().includes(lowerCaseValue)
    );
  }
}
