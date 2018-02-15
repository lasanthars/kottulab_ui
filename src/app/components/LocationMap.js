import {Component} from '@angular/core';

@Component({
  selector: 'kottu-lab-location-map',
  template: require('./LocationMap.html')
})
export class LocationMapComponent {
  constructor() {
    this.lat = Number(6.897281);
    this.lng = Number(79.877896);
  }
}
