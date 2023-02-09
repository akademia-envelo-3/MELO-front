import { ElementRef, inject, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { SnackBarService } from '@shared/services';

@Injectable({
  providedIn: 'root',
})
export class HashtagsService {
  private snackBarService = inject(SnackBarService);
  private readonly MAX_CHARS = 50;
  private readonly MAX_HASHTAG_COUNT = 100;
  private addedHashtags: string[] = [];
  private allHashtags: string[] = [
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

  get maxCharsValue() {
    return this.MAX_CHARS;
  }
  get addedHashtagsValue() {
    return this.addedHashtags;
  }
  get allHashtagsValue() {
    return this.allHashtags;
  }

  add(
    event: MatChipInputEvent,
    hashtagCtrl: FormControl,
    auto: MatAutocompleteTrigger
  ): void {
    if (this.addedHashtags.length >= this.MAX_HASHTAG_COUNT) {
      this.maxHashtagCountInfo();
    } else {
      const hashtagStr = (event.value || '').trim().slice(0, this.MAX_CHARS);

      if (hashtagStr.length >= this.MAX_CHARS) {
        this.maxCharsInfo();
      }
      // Add hashtag
      if (hashtagStr && !this.addedHashtags.includes(hashtagStr) && !auto.activeOption) {
        this.addedHashtags.push(hashtagStr);
      } else if (this.addedHashtags.includes(hashtagStr)) {
        this.hashtagAlreadyAddedInfo(hashtagStr);
      }

      // Clear the input value
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      event.chipInput!.clear();
      hashtagCtrl.setValue('');
    }
  }

  addFromAutocomplete(
    event: MatAutocompleteSelectedEvent,
    hashtagInput: ElementRef<HTMLInputElement>,
    hashtagCtrl: FormControl
  ): void {
    if (this.addedHashtags.length >= this.MAX_HASHTAG_COUNT) {
      this.maxHashtagCountInfo();
    } else {
      const hashtagStr = event.option.viewValue;
      if (this.addedHashtags.includes(hashtagStr)) {
        this.hashtagAlreadyAddedInfo(hashtagStr);
      } else {
        hashtagInput.nativeElement.value = '';
        hashtagCtrl.setValue('');
        this.addedHashtags.push(hashtagStr);
      }
    }
  }

  edit(hashtag: string, event: MatChipEditedEvent, auto: MatAutocompleteTrigger) {
    const hashtagStr = event.value.trim();

    if (!hashtagStr) {
      this.remove(hashtag, auto);
      return;
    }

    // Edit existing hashtags
    const index = this.addedHashtags.indexOf(hashtag);
    if (index >= 0 && !this.addedHashtags.includes(hashtagStr)) {
      if (hashtagStr.length > this.MAX_CHARS) this.maxCharsInfo();
      this.addedHashtags[index] = hashtagStr.slice(0, this.MAX_CHARS);
    } else {
      this.hashtagAlreadyAddedInfo(hashtagStr);
    }
  }

  remove(hashtag: string, auto: MatAutocompleteTrigger): void {
    const index = this.addedHashtags.indexOf(hashtag);

    if (index >= 0) {
      this.addedHashtags.splice(index, 1);
    }
    auto.closePanel();
  }

  private hashtagAlreadyAddedInfo(hashtagStr: string) {
    this.snackBarService.openSnackBar(
      `Hashtag o treści "${hashtagStr}" został już dodany`
    );
  }
  private maxHashtagCountInfo() {
    this.snackBarService.openSnackBar(
      `Maksymalna liczba hashtagów to ${this.MAX_HASHTAG_COUNT}`
    );
  }
  private maxCharsInfo() {
    this.snackBarService.openSnackBar(`Maksymalna liczba znaków to ${this.MAX_CHARS}`);
  }
}
