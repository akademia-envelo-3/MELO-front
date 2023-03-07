import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: 'input[appRemoveSpaces]',
  standalone: true,
})
export class RemoveSpacesDirective {
  private el = inject(ElementRef);

  @HostListener('input', ['$event']) onInputChange() {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replaceAll(' ', '');
  }
}
