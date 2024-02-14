import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ICustomCard } from "../actions/customCard.actions"

export const selectCustomCardsFeature = createFeatureSelector<{cards: ICustomCard[]}>('cards')
export const selectCustomCards = createSelector(
  selectCustomCardsFeature,
  (customCards) => customCards.cards
)
