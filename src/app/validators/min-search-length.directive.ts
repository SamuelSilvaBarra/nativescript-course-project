import { Directive, forwardRef } from '@angular/core'
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms'

@Directive({
  selector: '[appMinSearchLength]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinSearchLengthDirective),
      multi: true,
    },
  ],
})
export class MinSearchLengthDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = String(control.value ?? '')

    if (!value) {
      return null
    }

    return value.length >= 3
      ? null
      : { minSearchLength: true }
  }
}
