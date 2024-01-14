import { Component, Input } from '@angular/core'
import { ISearchItem } from '../../models/search-item.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {

@Input() cardData!: ISearchItem

constructor(private router: Router) {}

onButtonClick(item: ISearchItem) {
  this.router.navigate(['/youtube', item.id])
}

}
