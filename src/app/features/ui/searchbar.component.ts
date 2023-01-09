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

    <div class="searchbarDropdown"></div>
  `,
  styles: [
    `
      .searchbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        border: 1.15px solid #5e4139;
        border-radius: 25px;
        background-color: #211e1d;
      }
      .searchbar__input {
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
      mat-icon {
        color: #ead63d;
      }
      .searchbar:focus-within {
        border: 1.15px solid #fff8ba;
      }
      .visible {
        display: initial;
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
