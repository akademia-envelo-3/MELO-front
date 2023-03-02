import { Directive, ElementRef, inject, Input, OnChanges } from '@angular/core';
import { MatOption } from '@angular/material/core';

@Directive({
  selector: 'mat-option[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnChanges {
  @Input() search!: string;
  private elementRef = inject(ElementRef);
  private matOptionElement = inject<MatOption<string>>(MatOption);

  ngOnChanges() {
    const text = this.matOptionElement.value;
    const regex = new RegExp(this.search, 'gi');
    const match = text.match(regex);
    if (match) {
      this.elementRef.nativeElement.innerHTML = this.search
        ? text.replace(regex, (match: string) => `<b>${match}</b>`)
        : text;
    }
  }
}
