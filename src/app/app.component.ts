import { Component } from '@angular/core';
import {Store} from "@ngrx/store"
import { map } from 'rxjs';
import{increase, decrease, clear, countSelector, updateAtSelector} from "./reducers/counter"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$ = this.store.select(countSelector)
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0))
  updateAt$ = this.store.select(updateAtSelector)

  constructor(private store: Store){

  }

  increase(): void {
    this.store.dispatch(increase())
  }
  decrease(): void {
    this.store.dispatch(decrease())
  }
  clear(): void {
    this.store.dispatch(clear())
  }

  get cannotDecrease(): boolean {
    return false
  }
}
