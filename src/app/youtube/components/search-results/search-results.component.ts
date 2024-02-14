import { Component } from '@angular/core'
import { FilterService } from 'src/app/youtube/services/filter.service'
import { SortService } from 'src/app/youtube/services/sort.service'
import { IVideoItem } from '../../models/video-item.model'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { selectYoutubeCards } from 'src/app/redux/selectors/youtubeCards.selectors'
import { selectCustomCards } from 'src/app/redux/selectors/customCards.selector'
import { ICustomCard } from 'src/app/redux/actions/customCard.actions'


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  public items$: Observable<IVideoItem[]> = this.store.select(selectYoutubeCards)
  public customCards$: Observable<ICustomCard[]> = this.store.select(selectCustomCards)

  constructor(
    public filter: FilterService,
    public sort: SortService,
    private store: Store
  ) { }

  trackByFn(index: number, item: IVideoItem) {
    return item.id
  }
}
