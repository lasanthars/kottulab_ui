import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '../actions/index';

@Component({
  selector: 'kottu-lab-location',
  template: require('./Location.html')
})
export class LocationComponent {
  constructor(store) {
    this.store = store;
  }

  static get parameters() {
    return [[Store]];
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.store.dispatch(actions.addTodo(text));
    }
  }
}
