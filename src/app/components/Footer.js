import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '../actions/index';

@Component({
  selector: 'kottu-lab-footer',
  template: require('./Footer.html')
})
export class FooterComponent {
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
