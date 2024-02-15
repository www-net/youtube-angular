import { createSelector } from "@ngrx/store"
import { selectYoutubeFeature } from "./youtubeCards.selectors"
import { selectCustomCardsFeature } from "./customCards.selector"

export const selectStor = createSelector(
  selectYoutubeFeature,
  selectCustomCardsFeature,
  ({videos},{cards}) => {
    return [...videos, ...cards]
  }
)
