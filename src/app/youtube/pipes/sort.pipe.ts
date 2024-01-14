import { Pipe, PipeTransform } from '@angular/core'
import { ISort, TSortOrder, TSortValue } from '../../core/components/header/filter/sort.model'
import { ISearchItem } from '../models/search-item.model'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: ISearchItem[], sortSettings?: ISort): ISearchItem[] {
    if (!sortSettings) {
      return items
    }

    let newItems: ISearchItem[] = [...items]
    
    if (Object.keys(sortSettings).length) {
      newItems = this.sort(newItems, sortSettings)
    }

    return newItems
  }

  sort(items: ISearchItem[], sortSettings: ISort) {
    return items.sort((a, b) => this.sortCallback(a, b, sortSettings.property, sortSettings.order))
  }

  sortCallback(a: ISearchItem, b: ISearchItem, property?: TSortValue, order?: TSortOrder) {
    if (property && order) {
      const [firstValue, secondValue] = property === 'date'
      ? [new Date(a.snippet.publishedAt).getTime(), new Date(b.snippet.publishedAt).getTime()]
      : [Number(a.statistics.viewCount), Number(b.statistics.viewCount)]

      return order === 'ASC' ? firstValue - secondValue : secondValue - firstValue
    } 

    return 0
  }
}
