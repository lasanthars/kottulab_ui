import { Component, OnInit } from '@angular/core';
import { CustomMenuInterface } from '../interface/CustomMenuInterface';

import { HttpService } from '../services';

const k1 = require( '../../images/sea_food_kottu.jpg');

@Component({
  selector: 'kottu-lab-custom-kottu-menu',
  template: require('./CustomKottuMenu.html')
})
export class CustomKottuMenuComponent {
  menus: CustomMenuInterface[];
  public kImg1: any;
  public selectedCarb: string;
  public selectedCarbPrice: any;
  public selectedPortion: string;
  public selectedPortionPrice: any;
  public customKottuMenu: number;
  private totalPrice: any;
  private newMenus

  constructor(private menuService: HttpService) {
    this.kImg1 = k1;
  }

  getAllCustomMenus(): void {
    this.menuService
      .getAllCustomMenus()
      .then(menus => this.menus = menus);
  }

  ngOnInit(): void {
    this.getAllCustomMenus();
    this.selectedCarb = '-1';
    this.selectedPortion = '-1';
    this.totalPrice = 0;
    this.selectedPortionPrice = 0;
    this.selectedCarbPrice = 0;
    this.customKottuMenu = 1;
  }

  changePortion(selected: string, obj: object, type: string) {
    for (let key of Object.keys(obj)) {
      if (selected === obj[key].id) {
        if (type === 'portion') {
          this.totalPrice = (this.totalPrice - this.selectedPortionPrice) + obj[key].price;
          this.selectedPortionPrice = obj[key].price;
        } else {
          this.totalPrice = (this.totalPrice - this.selectedCarbPrice) + obj[key].price;
          this.selectedCarbPrice = obj[key].price;
        }
      }
    }
  }

  calculateAddons(event: any, price: number) {
    if (event.target.checked) {
      this.totalPrice += price;
    } else {
      this.totalPrice -= price;
    }
  }

  createNewCustomMenu(model: number, menu: any) {
    const newA = menu;
    this.menus.push(newA);
  }
}
