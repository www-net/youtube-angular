import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  catchError, debounceTime, distinctUntilChanged,
  EMPTY, map, mergeMap, switchMap,
} from 'rxjs'
import { ResultsService } from '../../youtube/services/results.service'
import { loadSearchResponse, loadVideosSuccess } from '../actions/youtube.actions'

@Injectable()
export class YoutubeEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSearchResponse),
      debounceTime(500),
      distinctUntilChanged(),
      mergeMap((props) => this.movieService$.getSearchResult(props.query)),
      map((items) => this.movieService$.getId(items)),
      switchMap((id) => this.movieService$.getVideoItems(id)
        .pipe(
          map((videos) => loadVideosSuccess({ videos })),
          catchError(() => EMPTY),
        )),
    )
  })

  constructor(
    private actions$: Actions,
    private movieService$: ResultsService,
  ) {
  }
}
