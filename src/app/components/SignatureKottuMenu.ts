import { Component, OnInit } from '@angular/core';
import { SignatureMenuInterface } from '../interface/SignatureMenuInterface';

import { HttpService } from '../services';

const k1 = require( '../../images/sea_food_kottu.jpg');

@Component({
  selector: 'kottu-lab-signature-kottu-menu',
  template: require('./SignatureKottuMenu.html')
})
export class SignatureKottuMenuComponent {
  menus: SignatureMenuInterface[];
  public kImg1: any;

  constructor(private menuService: HttpService) {
    this.kImg1 = k1;
  }

  getAllSignatureMenus(): void {
    this.menuService
      .getAllSignatureMenus()
      .then(menus => this.menus = menus);
  }

  ngOnInit(): void {
    this.getAllSignatureMenus();
  }

  convertToTotal(price: number, quantity: any) {
    // debugger;
    let total: number = 0;
    if(quantity === undefined || quantity === '') {
      total = price * 1;
    } else {
      total = price * quantity;
    }
    return total;
  }
}
