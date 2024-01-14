import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { response } from '../../models/mock-response.model'
import { ISearchItem } from '../../models/search-item.model'

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit, OnDestroy {
  private sub: Subscription | undefined
  id = ''
  cardData!: ISearchItem

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
      this.cardData = <ISearchItem>response.items.find((item) => item.id === this.id)
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }
}
