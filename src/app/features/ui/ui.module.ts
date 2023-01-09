import { SearchbarComponent } from "./searchbar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SearchbarComponent],
})
export default class UiModule {}
