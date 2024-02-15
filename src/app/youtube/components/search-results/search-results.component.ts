import { Component } from '@angular/core'
import { FilterService } from 'src/app/youtube/services/filter.service'
import { SortService } from 'src/app/youtube/services/sort.service'
import { IVideoItem } from '../../models/video-item.model'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { selectStor } from 'src/app/redux/selectors/store.selector'


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  public store$: Observable<IVideoItem[]> = this.store.select(selectStor)

  constructor(
    public filter: FilterService,
    public sort: SortService,
    private store: Store
  ) { }

  trackByFn(index: number, item: IVideoItem) {
    return item.id
  }
}
