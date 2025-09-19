import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CardComponent } from './components/card/card.component';
import { TypeComponent } from './components/type/type.component';
import { InstrumentComponent } from './components/instrument/instrument.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    CardComponent,
    TypeComponent,
    InstrumentComponent
  ],
  exports: [
    CardComponent,
    TypeComponent,
    InstrumentComponent,
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }