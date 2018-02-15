import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '../actions/index';
import logo from '../../images/logo.png';

@Component({
  selector: 'kottu-lab-hotline',
  template: require('./Hotline.html')
})
export class HotlineComponent {
  constructor(store) {
    this.store = store;
    this.brandName = logo;
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
