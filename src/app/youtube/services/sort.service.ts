import { Injectable } from '@angular/core'
import { ISort } from '../../core/components/header/filter/sort.model'

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private sortField: ISort = {}

  get value() {
    return this.sortField
  }

  set value(value: ISort) {
    this.sortField = {...value}
  }
}


