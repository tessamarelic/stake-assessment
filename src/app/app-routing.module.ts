import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { InvestComponent } from './components/invest/invest.component';
import { DiscoverComponent } from './components/discover/discover.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'tabs/investments',
      pathMatch: 'full',
    },
    {
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: 'investments',
          loadComponent: () =>
            import('./components/invest/invest.component').then(m => m.InvestComponent),
        },
        {
          path: 'discover',
          loadComponent: () =>
            import('./components/discover/discover.component').then(m => m.DiscoverComponent),
        },
        {
          path: '',
          redirectTo: 'investments',
          pathMatch: 'full',
        },
      ],
    },
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }