import { createAction, props } from "@ngrx/store"

export interface ICustomCard {
  title: string,
  description?: string,
  image: string,
  video: string,
  date: string,
}

export const postCustomCard = createAction(
  '[CustomCard] Post Custom Card',
  props<{card:  ICustomCard}>(),
)
