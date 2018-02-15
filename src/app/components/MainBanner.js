import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '../actions/index';
import iconOne from '../../images/signature-kottu.png';
import iconTwo from '../../images/own-kottu.png';

@Component({
  selector: 'kottu-lab-main-banner',
  template: require('./MainBanner.html')
})
export class MainBannerComponent {
  constructor(store) {
    this.store = store;
    this.sigKottu = iconOne;
    this.ownKottu = iconTwo;
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
