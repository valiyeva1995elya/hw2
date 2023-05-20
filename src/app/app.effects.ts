import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { clear, decrease, increase, changeUpdatedAt } from './reducers/counter';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(increase, decrease, clear),
    map(() => changeUpdatedAt({updatedAt: Date.now()}))
  ));
    
}