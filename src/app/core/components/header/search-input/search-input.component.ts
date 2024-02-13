import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { loadSearchResponse } from 'src/app/redux/actions/youtube.actions'
import { FilterService } from 'src/app/youtube/services/filter.service'
import { ResultsService } from 'src/app/youtube/services/results.service'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Output() clickTune: EventEmitter<boolean> = new EventEmitter<boolean>()
  inputValue = ''

  constructor(
    private filter: FilterService,
    private results: ResultsService,
    private router: Router,
    private store: Store
  ) { }

  onTuneClick() {
    this.clickTune.emit()
    this.filter.value = ''
  }

  onChange(event: KeyboardEvent) {
    const { value } = <HTMLInputElement>event.target
    const { length } = value.trim()
    if (length >= 3) {
      this.store.dispatch(loadSearchResponse({ query: value }))
      this.results.isShow = true
      this.router.navigate(['/youtube'])
    }
  }
}
