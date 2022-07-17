import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {
  pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.+[a-zA-Z]{2,4}$/;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.pattern.test(control.value) ? null : { invalidEmail: true };
  }
}
