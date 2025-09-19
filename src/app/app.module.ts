import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    // Removed AppComponent from imports as it is a standalone component
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  // Removed bootstrap array as AppComponent is a standalone component
})
export class AppModule { }