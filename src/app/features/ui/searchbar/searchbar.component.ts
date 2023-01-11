import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { of } from "rxjs";
import { SearchbarDropdownComponent, SearchResult } from "./searchbar-dropdown.component";

@Component({
  selector: "app-searchbar",
  standalone: true,
  imports: [SearchbarDropdownComponent, MatIconModule, CommonModule],
  template: `
    <div class="searchbar">
      <mat-icon>search</mat-icon>
      <input
        type="text"
        class="searchbar__input"
        placeholder="Szukaj na Melo"
        maxlength="80"
        (keyup)="getSearchValue($event)"
        [value]="searchPhrase"
      />
      <mat-icon
        class="searchbar__close"
        [ngClass]="{ visible: !isEmpty }"
        (click)="clearSearchValue()"
        >close</mat-icon
      >
    </div>

    <app-searchbar-dropdown
      [ngClass]="{ hide: isDropdownNotVisible }"
      [searchResults]="searchResults"
    ></app-searchbar-dropdown>
  `,
  styleUrls: ["./searchbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent {
  searchPhrase = "";
  searchResults: SearchResult[] = [];
  minNumberOfLettersToShowDropdown = 2;
  isEmpty = true;
  isDropdownNotVisible = false;

  getSearchValue(event: KeyboardEvent) {
    this.searchPhrase = (event.target as HTMLInputElement).value;

    /* To do  fetch results*/
    of([
      {
        searchResultTitle: "Znalezione wydarzenie",
        searchResultPhrase: "Znaleziona fraza",
        searchResultImg:
          "https://cdn.pixabay.com/photo/2023/01/04/15/01/flower-7696955_1280.jpg",
      },
      {
        searchResultTitle: "Znalezione wydarzenie 2",
        searchResultPhrase: "Znaleziona fraza 2",
        searchResultImg: "",
      },
      {
        searchResultTitle: "Znalezione wydarzenie 3",
        searchResultPhrase: "Znaleziona fraza 3",
        searchResultImg:
          "https://cdn.pixabay.com/photo/2023/01/04/15/01/flower-7696955_1280.jpg",
      },
      {
        searchResultTitle: "Znalezione wydarzenie 4",
        searchResultPhrase: "Znaleziona fraza 4",
        searchResultImg: "",
      },
    ]).subscribe(searchResults => {
      this.searchResults = searchResults;
    });
    /* */

    if (this.searchPhrase.length > 0) {
      // check to show close button
      this.isEmpty = false;
    }
    if (this.searchPhrase.length >= this.minNumberOfLettersToShowDropdown) {
      // check to show dropdown
      this.isDropdownNotVisible = false;
    } else {
      this.isDropdownNotVisible = true;
    }
  }
  clearSearchValue() {
    this.searchPhrase = "";
    this.isEmpty = true;
    this.isDropdownNotVisible = true;
  }
}
