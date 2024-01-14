import { Component } from '@angular/core'
import { ISearchResponse } from '../../models/search-response.model'
import { response } from './mock-response.model'
import { ISearchItem } from '../../models/search-item.model'
import { FilterService } from 'src/app/youtube/services/filter.service'
import { SortService } from 'src/app/youtube/services/sort.service'
import { ResultsService } from 'src/app/youtube/services/results.service'


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  response: ISearchResponse

  constructor(public filter: FilterService, public sort: SortService, public searchResult: ResultsService) {
    this.response = response
  }

  isShowResults() {
    return this.searchResult.isShow
  }

  trackByFn(index: number, item: ISearchItem) {
    return item.id
  }

}
