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
          <mat-icon>person_search</mat-icon>
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
  styles: [
    `
      .searchbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 46px;

        padding-left: 10px;
        padding-right: 10px;
        border: 1.15px solid #5e4139;
        border-radius: 25px;
        background-color: #211e1d;
        margin-bottom: 5px;
      }
      .searchbar__input {
        font-size: 1.125rem;
        color: white;
        flex-grow: 1;
        outline: none;
        border: none;
        background: none;
        padding-left: 5px;
      }
      .searchbar__input::placeholder {
        color: #ddd7d9;
      }
      .searchbar__close {
        cursor: pointer;
        display: none;
      }
      .searchbar > mat-icon {
        color: #ead63d;
      }
      .searchbar:focus-within {
        border: 1.15px solid #fff8ba;
      }
      .visible {
        display: initial;
      }

      /* searchbar dropdown */
      .searchbarDropdown {
        height: 200px;
        background-color: #211e1d;
        color: #a7a4a5;
        border: 1.15px solid #5e4139;
        border-radius: 15px;
        padding: 12px;
      }
      .searchbarDropdown__filterMenu {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .searchbarDropdown__filterMenuItem {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1.15px solid #5e4139;
        border-radius: 25px;
        font-weight: semi-bold;
        font-size: 12px;
        padding-left: 6px;
        padding-right: 12px;
      }
      .searchbarDropdown__filterMenuItem > mat-icon {
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .searchbarDropdown__results {
        padding-top: 20px;
      }
    `,
  ],
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
