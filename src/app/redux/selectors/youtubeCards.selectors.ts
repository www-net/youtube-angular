import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IVideoItem } from '../../youtube/models/video-item.model'

export const selectYoutube = createFeatureSelector<{ videos: IVideoItem[] }>('youtubeCards')
export const selectYoutubeCards = createSelector(
  selectYoutube,
  (youtubeCards) => youtubeCards.videos,
)
