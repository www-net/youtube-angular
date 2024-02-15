import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription, map } from 'rxjs'
import { IVideoItem } from '../../models/video-item.model'
import { ResultsService } from '../../services/results.service'
import { Store } from '@ngrx/store'
import { selectStore } from 'src/app/redux/selectors/store.selector'

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription
  private storeSubscription: Subscription
  id = ''
  cardData!: IVideoItem
  dislikeCount = 10

  constructor(
    private activatedRoute: ActivatedRoute,
    private resultService: ResultsService,
    private store: Store
    ) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
      this.storeSubscription = this.store.select(selectStore).pipe(map((videos) => {
        const item = videos.find((video) => video.id === this.id)
        if (!item) {
          this.resultService.getVideoById(this.id).subscribe((video) => {
            this.cardData = <IVideoItem>video.items[0]
          })
        } else {
          this.cardData = item
        }

        return this.cardData
      })).subscribe()
    })
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
    this.storeSubscription.unsubscribe()
  }
}
