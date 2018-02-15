import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '../actions/index';

import k1 from '../../images/sea_food_kottu.jpg';
import k2 from '../../images/sea_food_kottu_01.jpg';
import k3 from '../../images/vegetable_kottu.jpg';
import k4 from '../../images/vegetable_kottu_top.jpg';

@Component({
  selector: 'kottu-lab-home-desc',
  template: require('./MainDescription.html')
})
export class MainDescriptionComponent {
  constructor(store) {
    this.store = store;
    this.kImg1 = k1;
    this.kImg2 = k2;
    this.kImg3 = k3;
    this.kImg4 = k4;
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
