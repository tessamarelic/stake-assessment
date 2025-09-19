import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Import SharedModule instead of individual components
import { SharedModule } from '../../shared/shared.module';
import { InvestComponent } from './invest.component';

const routes: Routes = [
  {
    path: '',
    component: InvestComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ],
  declarations: [
    InvestComponent
  ]
})
export class InvestModule {}