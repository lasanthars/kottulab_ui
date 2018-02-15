import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AgmCoreModule} from 'angular2-google-maps/core';

import {routing, RootComponent} from './routes';
import {store} from './reducers';

import {AppComponent} from './containers/App';
import {HeaderComponent} from './components/Header';
import {NavigationComponent} from './components/Navigation';
import {HotlineComponent} from './components/Hotline';
import {MainBannerComponent} from './components/MainBanner';
import {MainDescriptionComponent} from './components/MainDescription';
import {LocationComponent} from './components/Location';
import {LocationMapComponent} from './components/LocationMap';
import {FooterComponent} from './components/Footer';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCPayHIwppZWiBbsZoB0-KGVV9l6ylMVk0'}),
    FormsModule,
    routing,
    store
  ],
  declarations: [
    RootComponent,
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HotlineComponent,
    MainBannerComponent,
    MainDescriptionComponent,
    LocationComponent,
    LocationMapComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
