import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IVideoItem } from "src/app/youtube/models/video-item.model"

export const selectCustomCardsFeature = createFeatureSelector<{cards: IVideoItem[]}>('customCards')
export const selectCustomCards = createSelector(
  selectCustomCardsFeature,
  (customCards) => customCards.cards
)
