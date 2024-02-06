import { ValidationErrors, ValidatorFn } from "@angular/forms"

export class CustomValidators {

  static dateValidation(): ValidatorFn {
    return (control): ValidationErrors | null => {
      const currentDate = new Date()
      const userDate = new Date(control.value)

      if (userDate <= currentDate) {
        return null
      }

      return { isFutureDate: true }
    }
  }

}
