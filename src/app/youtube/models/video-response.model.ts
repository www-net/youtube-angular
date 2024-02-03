import { IVideoItem } from './video-item.model'

export interface IVideoResponse {
  kind: string,
  etag: string,
  items: IVideoItem[],
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },

}

