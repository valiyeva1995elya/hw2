import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { CounterState, counterReducer, COUNT_KEY } from './counter';

export interface State {
  [COUNT_KEY]: CounterState;

};

export const reducers: ActionReducerMap<State> = {
  [COUNT_KEY]: counterReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
