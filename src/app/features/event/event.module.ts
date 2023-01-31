import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PowerIconComponent } from '@shared/ui';

@NgModule({
  declarations: [PowerIconComponent],
  imports: [CommonModule, MatIconModule],
  exports: [PowerIconComponent],
})
export class EventModule {}
