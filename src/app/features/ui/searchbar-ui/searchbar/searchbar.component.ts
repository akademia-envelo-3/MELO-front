import { NgClass } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SearchResult } from '../search.types';
import { SearchbarDropdownComponent } from '../searchbar-dropdown/searchbar-dropdown.component';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [SearchbarDropdownComponent, MatIconModule, NgClass],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent {
  @Input() typeOfEvent = true;
  @Input() searchResults: SearchResult[] = [];
  @Output() newSearchPhraseEvent = new EventEmitter<string>();
  @Output() newSearchTypeEvent = new EventEmitter<string>();

  searchPhrase = '';
  defaultSearchType = 'tekst';
  selectedSearchType = this.defaultSearchType;

  isEmpty = true;
  isDropdownNotVisible = true;
  readonly MIN_NUMBER_0F_LETTERS_TO_SHOW_DROPDOWN = 1;
  readonly MAX_NUMBER_OF_RESULTS_TO_DISPLAY = 6;

  getSearchValue(event: KeyboardEvent) {
    this.searchPhrase = (event.target as HTMLInputElement).value;
    this.newSearchPhraseEvent.emit(this.searchPhrase);
    this.checkToShowCloseButton();
    this.checkToShowSearchbarDropdown();
  }

  clearSearchValue() {
    this.searchPhrase = '';
    this.isEmpty = true;
    this.isDropdownNotVisible = true;
  }

  private checkToShowCloseButton() {
    if (this.searchPhrase.length > 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }
  private checkToShowSearchbarDropdown() {
    return (this.isDropdownNotVisible =
      this.searchPhrase.length < this.MIN_NUMBER_0F_LETTERS_TO_SHOW_DROPDOWN);
  }
}
