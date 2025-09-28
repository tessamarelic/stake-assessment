import { Routes } from '@angular/router';
import { TabsComponent } from './shared/components/tabs/tabs.component';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'investments',
        data: { tab: 'investments' },
        loadComponent: () =>
          import('./components/invest/invest.component').then(m => m.InvestComponent),
      },
      {
        path: 'discover',
        data: { tab: 'discover' },
        loadComponent: () =>
          import('./components/discover/discover.component').then(m => m.DiscoverComponent),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/investments',
    pathMatch: 'full',
  },
];