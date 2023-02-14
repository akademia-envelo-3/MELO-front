import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input('appHighlight') search!: string;
  private elementRef = inject(ElementRef);

  ngOnChanges() {
    const text = this.elementRef.nativeElement.innerText;
    const pattern = this.search
      .replace(/[-[\]/{}()*x+?.\\^$|]/g, '\\$&')
      .split(' ')
      .filter(t => t.length > 0)
      .join('|');
    const regex = new RegExp(pattern, 'gi');
    const match = text.match(regex);
    if (match) {
      this.elementRef.nativeElement.innerHTML = this.search
        ? text.replace(regex, (match: string) => `<b>${match}</b>`)
        : text;
    }
  }
}
