import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IVideoItem } from '../../youtube/models/video-item.model'

export const selectYoutubeFeature = createFeatureSelector<{ videos: IVideoItem[] }>('youtubeCards')
export const selectYoutubeCards = createSelector(
  selectYoutubeFeature,
  (youtubeCards) => youtubeCards.videos,
)
