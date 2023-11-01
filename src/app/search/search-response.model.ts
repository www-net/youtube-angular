export interface ISearchResponse {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: ISearchItems[]
}

export interface ISearchItems {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: IThumbnails,
      medium: IThumbnails,
      high: IThumbnails,
      standard: IThumbnails,
      maxres: IThumbnails
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    defaultLanguage?: string,
    localized: {
      title: string,
      description: string,
    },
    defaultAudioLanguage: string,
  },
  statistics: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string,
  }

}

export interface IThumbnails {
  url: string,
  width: number,
  height: number,
}

