import { createAction, props } from '@ngrx/store'
import { IVideoItem } from '../../youtube/models/video-item.model'

export const loadSearchResponse = createAction(
  '[Youtube] Load Search Response',
  props<{ query: string }>(),
)

export const loadVideosSuccess = createAction(
  '[Youtube] Videos Loaded Success',
  props<{ videos: IVideoItem[] }>(),
)
