import { Pipe, PipeTransform } from '@angular/core'
import { ISort, TSortOrder, TSortValue } from '../../core/components/header/filter/sort.model'
import { IVideoItem } from '../models/video-item.model'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: IVideoItem[], sortSettings?: ISort): IVideoItem[] {
    if (!sortSettings) {
      return items
    }

    let newItems: IVideoItem[] = [...items]

    if (Object.keys(sortSettings).length) {
      newItems = this.sort(newItems, sortSettings)
    }

    return newItems
  }

  sort(items: IVideoItem[], sortSettings: ISort) {
    return items.sort((a, b) => this.sortCallback(a, b, sortSettings.property, sortSettings.order))
  }

  sortCallback(a: IVideoItem, b: IVideoItem, property?: TSortValue, order?: TSortOrder) {
    if (property && order) {
      const [firstValue, secondValue] = property === 'date'
      ? [new Date(a.snippet.publishedAt).getTime(), new Date(b.snippet.publishedAt).getTime()]
      : [Number(a.statistics.viewCount), Number(b.statistics.viewCount)]

      return order === 'ASC' ? firstValue - secondValue : secondValue - firstValue
    }

    return 0
  }
}
