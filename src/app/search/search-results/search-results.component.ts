import { Component } from '@angular/core'
import { ISearchResponse } from '../search-response.model'
import { response } from '../search-results/mock-response.model'
import { ISearchItem } from '../search-item.model'
import { FilterService } from 'src/app/shared/services/filter.service'


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  response: ISearchResponse

  constructor(public filter: FilterService) {
    this.response = response
  }

  trackByFn(index: number, item: ISearchItem) {
    return item.id
  }

}
