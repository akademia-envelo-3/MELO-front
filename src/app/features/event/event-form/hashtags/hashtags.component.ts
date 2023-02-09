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
import { map, skip, startWith } from 'rxjs/operators';
import { inject } from '@angular/core';
import { HashtagsService } from './hashtags.service';

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
  providers: [HashtagsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HashtagsComponent {
  @ViewChild(MatAutocompleteTrigger)
  auto!: MatAutocompleteTrigger;
  @ViewChild('hashtagInput')
  hashtagInput!: ElementRef<HTMLInputElement>;

  private hashtagsService = inject(HashtagsService);
  readonly MAX_AUTOCOMPLETE_OPTIONS = 5;
  addedHashtags = this.hashtagsService.addedHashtagsValue;
  allHashtags = this.hashtagsService.allHashtagsValue;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  hashtagCtrl = new FormControl(
    '',
    Validators.maxLength(this.hashtagsService.maxCharsValue)
  );
  filteredHashtags$: Observable<string[]>;

  constructor() {
    this.filteredHashtags$ = this.hashtagCtrl.valueChanges.pipe(
      map((hashtag: string | null) =>
        hashtag ? this._filter(hashtag) : this.allHashtags.slice()
      )
    );
  }

  onAddHashtag(event: MatChipInputEvent): void {
    this.hashtagsService.add(event, this.hashtagCtrl, this.auto);
  }

  onRemoveAddedHashtag(hashtag: string): void {
    this.hashtagsService.remove(hashtag, this.auto);
  }

  onEditHashtag(hashtag: string, event: MatChipEditedEvent) {
    this.hashtagsService.edit(hashtag, event, this.auto);
  }

  onSelectedHashtag(event: MatAutocompleteSelectedEvent): void {
    this.hashtagsService.addFromAutocomplete(event, this.hashtagInput, this.hashtagCtrl);
  }

  private _filter(value: string): string[] {
    const lowerCaseValue = value.toLowerCase();

    return this.allHashtags.filter(hashtag =>
      hashtag.toLowerCase().includes(lowerCaseValue)
    );
  }
}
