import { ElementRef, inject, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { SnackBarService } from '@shared/services/snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class HashtagsService {
  private snackBarService = inject(SnackBarService);
  maxChars = 50;
  maxHashtagsCount = 100;
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
  ];

  addHashtag(
    event: MatChipInputEvent,
    hashtagCtrl: FormControl,
    auto: MatAutocompleteTrigger
  ): void {
    if (this.addedHashtags.length >= this.maxHashtagsCount) {
      this.maxHashtagCountInfo();
    } else {
      const hashtagStr = (event.value || '').trim().slice(0, this.maxChars);

      if (hashtagStr.length >= this.maxChars) {
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

  addHashtagFromAutocomplete(
    event: MatAutocompleteSelectedEvent,
    hashtagInput: ElementRef<HTMLInputElement>,
    hashtagCtrl: FormControl
  ): void {
    if (this.addedHashtags.length >= this.maxHashtagsCount) {
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

  editHashtag(hashtag: string, event: MatChipEditedEvent, auto: MatAutocompleteTrigger) {
    const hashtagStr = event.value.trim();

    if (!hashtagStr) {
      this.removeAddedHashtag(hashtag, auto);
      return;
    }

    // Edit existing hashtags
    const index = this.addedHashtags.indexOf(hashtag);
    if (index >= 0 && !this.addedHashtags.includes(hashtagStr)) {
      if (hashtagStr.length > this.maxChars) this.maxCharsInfo();
      this.addedHashtags[index] = hashtagStr.slice(0, this.maxChars);
    } else {
      this.hashtagAlreadyAddedInfo(hashtagStr);
    }
  }

  removeAddedHashtag(hashtag: string, auto: MatAutocompleteTrigger): void {
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
      `Maksymalna liczba hashtagów to ${this.maxHashtagsCount}`
    );
  }
  private maxCharsInfo() {
    this.snackBarService.openSnackBar(`Maksymalna liczba znaków to ${this.maxChars}`);
  }
}
