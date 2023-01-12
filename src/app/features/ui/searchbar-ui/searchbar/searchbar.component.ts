import { CommonModule } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SearchResult } from '../search.types';
import { SearchbarDropdownComponent } from '../searchbar-dropdown/searchbar-dropdown.component';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [SearchbarDropdownComponent, MatIconModule, CommonModule],
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
  minNumberOfLettersToShowDropdown = 2;
  maxNumberOfResultsToDisplay = 6;

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
    }
  }
  private checkToShowSearchbarDropdown() {
    if (this.searchPhrase.length >= this.minNumberOfLettersToShowDropdown) {
      this.isDropdownNotVisible = false;
    } else {
      this.isDropdownNotVisible = true;
    }
  }
}
