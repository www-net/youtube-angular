import { IVideoItem } from '../youtube/models/video-item.model'
import { ICustomCard } from './actions/customCard.actions'

export interface IYoutubeCardsState {
  videos: IVideoItem[]
}

export interface ICustomCardsState {
  cards: ICustomCard[]
}
