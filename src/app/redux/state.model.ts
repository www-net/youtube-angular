import { IVideoItem } from '../youtube/models/video-item.model'

export interface IYoutubeCardsState {
  videos: IVideoItem[]
}

export interface ICustomCardsState {
  cards: IVideoItem[]
}
