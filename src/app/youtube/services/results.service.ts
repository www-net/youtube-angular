import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, map } from 'rxjs'
import { IVideoResponse } from '../models/video-response.model'
import { ISearchItem } from '../models/search-item.model'
import { ISearchResponse } from '../models/search-response.model'
import { IVideoItem } from '../models/video-item.model'

const URL_SEARCH ='https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=15'
const URL_VIDEO = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics'



@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private isShowResults = false
  public searchValue: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(private http: HttpClient) { }

  get isShow() {
    return this.isShowResults
  }

  set isShow(isClickSearchButton) {
    this.isShowResults = isClickSearchButton
  }

  getVideoById(id: string): Observable<IVideoResponse> {
    const url = `${URL_VIDEO}&id=${id}`
    return this.http.get<IVideoResponse>(url)
  }

  getSearchResult(query: string): Observable<ISearchItem[]> {
    const url = `${URL_SEARCH}&q=${query}`
    return this.http.get<ISearchResponse>(url).pipe(
      map((response) => response.items)
    )
  }

  getId(items: ISearchItem[]): string {
    return (items.map((i) => i.id.videoId).join(','))
  }

  getVideoItems(id: string): Observable<IVideoItem[]> {
    const url = `${URL_VIDEO}&id=${id}`
    return this.http.get<IVideoResponse>(url).pipe(
      map((video) => video.items),
    )
  }
}
