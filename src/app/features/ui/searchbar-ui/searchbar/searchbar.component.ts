import { CommonModule } from "@angular/common";
import { Input } from "@angular/core";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { of } from "rxjs";
import { SearchResult } from "../search.types";
import { SearchbarDropdownComponent } from "../searchbar-dropdown/searchbar-dropdown.component";

@Component({
  selector: "app-searchbar",
  standalone: true,
  imports: [SearchbarDropdownComponent, MatIconModule, CommonModule],
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent {
  @Input() typeOfEvent = true;
  private defaultSearchType = "tekst";

  searchPhrase = "";
  selectedSearchType = this.defaultSearchType;
  searchResults: SearchResult[] = [];

  isEmpty = true;
  isDropdownNotVisible = true;
  minNumberOfLettersToShowDropdown = 2;
  maxNumberOfResultsToDisplay = 6;

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

    this.checkToShowCloseButton();
    this.checkToShowSearchbarDropdown();
  }

  clearSearchValue() {
    this.searchPhrase = "";
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
