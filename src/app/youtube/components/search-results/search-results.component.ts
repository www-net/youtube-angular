import { Component, OnDestroy, OnInit } from '@angular/core'
import { FilterService } from 'src/app/youtube/services/filter.service'
import { SortService } from 'src/app/youtube/services/sort.service'
import { ResultsService } from 'src/app/youtube/services/results.service'
import { IVideoItem } from '../../models/video-item.model'
import { Subscription, debounceTime, distinctUntilChanged, map, mergeMap, switchMap } from 'rxjs'


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  items: IVideoItem[] = []
  subscription$!: Subscription

  constructor(
    public filter: FilterService,
    public sort: SortService,
    private resultService: ResultsService
  ) { }

  trackByFn(index: number, item: IVideoItem) {
    return item.id
  }

  ngOnInit() {
    this.subscription$ = this.getVideo()
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe()
  }

  getVideo(): Subscription {
    return this.resultService.searchValue.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      mergeMap((value) => this.resultService.getSearchResult(value)),
      map((items) => this.resultService.getId(items)),
      switchMap((id) => this.resultService.getVideoItems(id))
    ).subscribe((items) => {
      this.items = items
    })
  }
}
