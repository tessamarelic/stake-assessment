import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { IonicRouteStrategy } from '@ionic/angular';
import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';

// Import components
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { InvestComponent } from './components/invest/invest.component';
import { DiscoverComponent } from './components/discover/discover.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Register standalone components
    TabsComponent,
    InvestComponent,
    DiscoverComponent
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class AppModule { }