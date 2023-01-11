import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

type SearchType = {
  searchTypeName: string;
  searchTypeIcon: string;
  isActive: boolean;
};

export type SearchResult = {
  searchResultTitle: string;
  searchResultPhrase?: string;
  searchResultImg?: string;
};

@Component({
  selector: "app-searchbar-dropdown",
  standalone: true,
  imports: [MatIconModule, CommonModule],
  template: `
    <div class="searchbarDropdown">
      <!-- Search type menu -->
      <ul class="searchbarDropdown__filterMenu">
        <li
          *ngFor="let searchType of searchTypes"
          class="searchbarDropdown__filterMenuItem"
          [ngClass]="{ active: searchType.isActive }"
          (click)="clickFilterEvent(searchType)"
        >
          <mat-icon>{{ searchType.searchTypeIcon }}</mat-icon>
          <p>{{ searchType.searchTypeName }}</p>
        </li>
      </ul>

      <!-- Results -->
      <div class="searchbarDropdown__results">
        <p>Wynik wyszukiwania</p>
        <ul class="searchbarDropdown__resultsList">
          <li
            class="searchbarDropdown__resultsListItem"
            *ngFor="let searchResult of searchResults"
          >
            <div class="resultPicture">
              <img
                *ngIf="searchResult.searchResultImg"
                src="{{ searchResult.searchResultImg }}"
                alt=""
              />
            </div>
            <div class="resultTitle">
              <p>{{ searchResult.searchResultTitle }}</p>
              <p class="foundPhrase">{{ searchResult.searchResultPhrase }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ["./searchbar-dropdown.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarDropdownComponent {
  searchTypes: SearchType[] = [
    {
      searchTypeName: "Tekst",
      searchTypeIcon: "rtt",
      isActive: true,
    },
    {
      searchTypeName: "Organizator",
      searchTypeIcon: "person_search",
      isActive: false,
    },
    {
      searchTypeName: "Hashtag",
      searchTypeIcon: "tag",
      isActive: false,
    },
    {
      searchTypeName: "Kategoria",
      searchTypeIcon: "category",
      isActive: false,
    },
  ];

  @Input() searchResults: SearchResult[] = [
    {
      searchResultTitle: "",
      searchResultPhrase: "",
    },
  ];
  selectedSearchType = "";

  clickFilterEvent(searchType: SearchType) {
    searchType.isActive = true;
    this.searchTypes.forEach(st => {
      if (searchType !== st) {
        st.isActive = false;
      }
    });
    this.selectedSearchType = searchType.searchTypeName.toLowerCase();
  }
}
