import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';

// Import components
import { DiscoverComponent } from './components/discover/discover.component';
import { InvestComponent } from './components/invest/invest.component';
import { TabsComponent } from './shared/components/tabs/tabs.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    // Register standalone components
    TabsComponent,
    InvestComponent,
    DiscoverComponent,

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class AppModule { }