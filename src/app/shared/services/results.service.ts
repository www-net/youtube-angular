import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  _isShow = false

  get isShow() {
    return this._isShow
  }

  set isShow(isClickSearchButton) {
    this._isShow = isClickSearchButton
  }
}
