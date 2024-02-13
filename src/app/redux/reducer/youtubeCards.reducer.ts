import { createReducer, on } from '@ngrx/store'
import { loadVideosSuccess } from '../actions/youtube.actions'
import { IYoutubeCardsState } from '../state.model'

export const initialState: IYoutubeCardsState = {
  videos: [],
}

export const youtubeCardsReducer = createReducer(
  initialState,
  on(loadVideosSuccess, (state, { videos }): IYoutubeCardsState => (
    { ...state, videos }
  )),
)
