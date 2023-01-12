import { SearchbarComponent } from "./../searchbar/searchbar.component";
import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { SearchType } from "../search.types";
import { Router } from "@angular/router";

@Component({
  selector: "app-searchbar-dropdown",
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: "./searchbar-dropdown.html",
  styleUrls: ["./searchbar-dropdown.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarDropdownComponent implements OnInit {
  private router = inject(Router);
  searchbar = inject(SearchbarComponent);

  ngOnInit() {
    this.searchbar.newSearchTypeEvent.emit(this.searchbar.defaultSearchType);
  }

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

  clickFilterEvent(searchType: SearchType) {
    searchType.isActive = true;
    this.searchTypes.forEach(st => {
      if (searchType !== st) {
        st.isActive = false;
      }
    });
    this.searchbar.newSearchTypeEvent.emit(searchType.searchTypeName.toLowerCase());
  }

  navigate() {
    this.router.navigate([""]);
  }
}
