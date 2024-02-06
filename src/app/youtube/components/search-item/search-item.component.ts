import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { IVideoItem } from '../../models/video-item.model'

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
@Input() cardData!: IVideoItem
dislikeCount = 10

constructor(private router: Router) {}

onButtonClick(item: IVideoItem) {
  this.router.navigate(['/youtube', item.id])
}

}
