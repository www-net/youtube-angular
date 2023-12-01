import { Injectable } from '@angular/core';
import { ISort } from 'src/app/header/filter/sort.model';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private _value: ISort = {}

  get value() {
    return this._value
  }

  set value(value: ISort) {
    this._value = Object.assign({}, value)
  }
}


