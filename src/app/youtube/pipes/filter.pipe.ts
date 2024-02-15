import { Pipe, PipeTransform } from '@angular/core'
import { IVideoItem } from '../models/video-item.model'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: IVideoItem[], filterValue?: string): IVideoItem[] {
    if(!filterValue){
      return items
    }

    let newItems: IVideoItem[] = []

    if(filterValue) {
      newItems = this.filter(items, filterValue)
    }

    return newItems

  }

  filter(items: IVideoItem[], filterValue: string) {
    return items.filter((item) => item.snippet.title.toLowerCase().includes(filterValue))
  }

}
