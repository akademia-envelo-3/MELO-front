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
  private readonly MAX_HASHTAG_COUNT = 5;
  private addedHashtags: string[] = [];
  private allHashtags: string[] = [
    'imprezaubasi',
    'piwonakanapie',
    'piłkarzyki',
    'pizzanaobiad',
    'pizzaforever',
    'pizzadominos',
    'pizzavssushi',
    'pizzaipiwo',
    'karaoke',
    'bilard',
    'urodziny',
    'baaaaaaaaaardzodłuuuuuugidashtagawogóletoooooooooo',
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
    const hashtagStr = (event.value || '').trim().slice(0, this.MAX_CHARS).toLowerCase();

    if (this.checkAddErrors(hashtagStr, auto)) {
      this.addedHashtags.push(hashtagStr);
      event.chipInput!.clear();
      hashtagCtrl.setValue('');
    }
  }

  addFromAutocomplete(
    event: MatAutocompleteSelectedEvent,
    hashtagInput: ElementRef<HTMLInputElement>,
    hashtagCtrl: FormControl
  ): void {
    const hashtagStr = event.option.viewValue;

    if (this.checkAddErrors(hashtagStr)) {
      hashtagInput.nativeElement.value = '';
      hashtagCtrl.setValue('');
      this.addedHashtags.push(hashtagStr);
    }
  }

  edit(hashtag: string, event: MatChipEditedEvent, auto: MatAutocompleteTrigger) {
    const hashtagStr = event.value.trim();
    const index = this.addedHashtags.indexOf(hashtag);

    if (!hashtagStr) {
      this.remove(hashtag, auto);
      return;
    }

    // Edit existing hashtags
    if (this.checkEditErrors(index, hashtagStr)) {
      this.addedHashtags[index] = hashtagStr.slice(0, this.MAX_CHARS);
    }
  }

  remove(hashtag: string, auto: MatAutocompleteTrigger): void {
    const index = this.addedHashtags.indexOf(hashtag);

    if (index >= 0) {
      this.addedHashtags.splice(index, 1);
    }
    auto.closePanel();
  }

  private checkAddErrors(hashtagStr: string, auto?: MatAutocompleteTrigger) {
    if (this.exceedsMaxHashtagCount(this.addedHashtags)) {
      this.maxHashtagCountInfo();
      return false;
    } else if (this.alreadyAdded(hashtagStr)) {
      this.hashtagAlreadyAddedInfo(hashtagStr);
      return false;
    } else if ((auto && auto.activeOption) || !hashtagStr) {
      return false;
    } else if (this.exceedsMaxChars(hashtagStr)) {
      this.maxCharsInfo();
      return true;
    } else {
      return true;
    }
  }

  private checkEditErrors(index: number, hashtagStr: string) {
    if (index <= 0) {
      return false;
    } else if (this.alreadyAdded(hashtagStr)) {
      this.hashtagAlreadyAddedInfo(hashtagStr);
      return false;
    } else if (this.exceedsMaxChars(hashtagStr)) {
      this.maxCharsInfo();
      return true;
    } else {
      return true;
    }
  }

  private exceedsMaxHashtagCount(hashtagList: string[]) {
    return hashtagList.length >= this.MAX_HASHTAG_COUNT;
  }
  private exceedsMaxChars(hashtagStr: string) {
    return hashtagStr.length >= this.MAX_CHARS;
  }

  private alreadyAdded(hashtagStr: string) {
    return this.addedHashtags.includes(hashtagStr);
  }

  private hashtagAlreadyAddedInfo(hashtagStr: string) {
    this.snackBarService.openSnackBar(
      `Hashtag o treści "${hashtagStr}" został już dodany`
    );
  }
  private maxHashtagCountInfo() {
    console.log('test');
    this.snackBarService.openSnackBar(
      `Maksymalna liczba hashtagów to ${this.MAX_HASHTAG_COUNT}`
    );
  }
  private maxCharsInfo() {
    this.snackBarService.openSnackBar(`Maksymalna liczba znaków to ${this.MAX_CHARS}`);
  }
}
