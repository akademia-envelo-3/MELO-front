import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-searchbar",
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

    <div class="searchbarDropdown">
      <ul class="searchbarDropdown__filterMenu">
        <li class="searchbarDropdown__filterMenuItem">
          <mat-icon>rtt</mat-icon>
          <p>Tekst</p>
        </li>
        <li class="searchbarDropdown__filterMenuItem">
          <mat-icon>person_search</mat-icon>
          <p>Organizator</p>
        </li>
        <li class="searchbarDropdown__filterMenuItem">
          <mat-icon>tag</mat-icon>
          <p>Hashtag</p>
        </li>

        <li class="searchbarDropdown__filterMenuItem">
          <mat-icon>category</mat-icon>
          <p>Kategoria</p>
        </li>
      </ul>

      <div class="searchbarDropdown__results">
        <p>Results</p>
        <ul class="searchbarDropdown__resultsList">
          <li class="searchbarDropdown__resultsListItem">
            <img src="" alt="" />
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ["./searchbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent {
  isEmpty = true;
  searchPhrase = "";

  getSearchValue(event: KeyboardEvent) {
    this.searchPhrase = (event.target as HTMLInputElement).value;
    if (this.searchPhrase.length > 0) {
      this.isEmpty = false;
    }
  }
  clearSearchValue() {
    this.searchPhrase = "";
    this.isEmpty = true;
  }
}
