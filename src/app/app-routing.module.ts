import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'investments',
    loadChildren: () => import('./components/invest/invest.module').then(m => m.InvestModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./components/discover/discover.module').then(m => m.DiscoverModule)
  },
  {
    path: '',
    redirectTo: 'investments',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }