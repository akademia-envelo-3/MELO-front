import { SearchbarComponent } from "./searchbar/searchbar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { SearchbarDropdownComponent } from "./searchbar-dropdown.component";

@NgModule({
  declarations: [SearchbarComponent, SearchbarDropdownComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SearchbarComponent],
})
export class UiModule {}
