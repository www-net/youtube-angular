import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private isShowResults = false

  get isShow() {
    return this.isShowResults
  }

  set isShow(isClickSearchButton) {
    this.isShowResults = isClickSearchButton
  }
}
