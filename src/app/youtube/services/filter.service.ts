import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private inputValue = ''

  get value() {
    return this.inputValue
  }

  set value(value: string) {
    if (value !== this.inputValue) {
      this.inputValue = value
    }
  }

}
