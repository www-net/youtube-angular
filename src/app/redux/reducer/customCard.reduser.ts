import { createReducer, on } from "@ngrx/store"
import { ICustomCardsState } from "../state.model"
import { postCustomCard } from "../actions/customCard.actions"

export const initialState: ICustomCardsState = {
  cards: []
}

export const customCardsReducer = createReducer(
  initialState,
  on(postCustomCard, (state, { card }): ICustomCardsState => (
    {...state, cards: [...state.cards, card]}
  ))
)
