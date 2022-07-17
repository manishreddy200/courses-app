import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]',
  exportAs: "togglePassword",
})
export class TogglePasswordDirective {

  constructor(private element: ElementRef) { }

  showPassword() {
    this.element.nativeElement.setAttribute('type', 'text');
  }

  hidePassword() {
    this.element.nativeElement.setAttribute('type', 'password');
  }
}
