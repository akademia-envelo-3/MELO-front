import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { inject } from '@angular/core';
import { SnackBarService } from '@shared/services/snack-bar.service';

type HashtagForm = FormGroup<{
  hashtagCtrl: FormControl<string>;
}>;
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
  private builder = inject(NonNullableFormBuilder);
  private maxChars = 10;
  private maxHashtagsCount = 100;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  hashtagForm: HashtagForm = this.builder.group({
    hashtagCtrl: this.builder.control('', {
      validators: [Validators.maxLength(this.maxChars)],
    }),
  });
  filteredHashtags$: Observable<string[]>;
  hashtags: string[] = [];
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

  get hashtagCtrl() {
    return this.hashtagForm.controls.hashtagCtrl;
  }

  constructor() {
    this.filteredHashtags$ = this.hashtagCtrl.valueChanges.pipe(
      startWith(null),
      map((hashtag: string | null) =>
        hashtag ? this._filter(hashtag) : this.allHashtags.slice()
      )
    );
  }

  addHashtag(event: MatChipInputEvent): void {
    if (this.hashtags.length >= this.maxHashtagsCount) {
      this.snackBarService.openSnackBar(
        `Dopuszczalna liczba hashtagów to ${this.maxHashtagsCount}`
      );
    } else {
      const value = (event.value || '').trim();

      // Add hashtag
      if (value && !this.hashtags.includes(value)) {
        this.hashtags.push(value);
      }

      // Clear the input value
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      event.chipInput!.clear();

      this.hashtagCtrl.setValue('');
    }
  }

  remove(hashtag: string): void {
    const index = this.hashtags.indexOf(hashtag);

    if (index >= 0) {
      this.hashtags.splice(index, 1);
    }
    this.auto.closePanel();
  }

  edit(hashtag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(hashtag);
      return;
    }

    // Edit existing fruit
    const index = this.hashtags.indexOf(hashtag);
    if (index >= 0) {
      if (value.length > this.maxChars)
        this.snackBarService.openSnackBar(
          `Dopuszczalna liczba znaków to ${this.maxChars}`
        );
      this.hashtags[index] = value.slice(0, this.maxChars);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.hashtags.includes(event.option.viewValue)) {
      this.hashtags.push(event.option.viewValue);
      this.hashtagInput.nativeElement.value = '';
      this.hashtagCtrl.setValue('');
    }
  }

  private _filter(value: string): string[] {
    const lowerCaseValue = value.toLowerCase();

    return this.allHashtags.filter(hashtag =>
      hashtag.toLowerCase().includes(lowerCaseValue)
    );
  }
}
