import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { search, addOutline, trendingUpOutline, cashOutline, pricetagOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet]
})
export class AppComponent {
  title = 'Stake';

  constructor() { 
    addIcons({ 
      search: search,
      addOutline: addOutline,
      buyChevrons: '/assets/buy-chevrons.svg',
      circleDollar: '/assets/circle-dollar.svg',
      portfolio: '/assets/portfolio.svg',
      squareDollar: '/assets/square-dollar.svg',
      target: '/assets/target.svg',
      'trending-up-outline': trendingUpOutline,
      'cash-outline': cashOutline,
      'pricetag-outline': pricetagOutline
    });
  }
}