import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './containers/App';
import {SignatureKottuComponent} from './containers/SignatureKottu';
import {CustomKottuComponent} from './containers/CustomKottu';

@Component({
  selector: 'kottu-labs-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'SignatureKottu',
    component: SignatureKottuComponent
  },
  {
    path: 'CustomKottu',
    component: CustomKottuComponent
  }
];

export const routing = RouterModule.forRoot(routes);
