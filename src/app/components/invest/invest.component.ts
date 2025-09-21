import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';
import { CardComponent } from '../../shared/components/card/card.component';
import { TypeComponent } from '../../shared/components/type/type.component';
import { InstrumentComponent } from '../../shared/components/instrument/instrument.component';

interface Card {
  price: string;
  fullname: string;
  symbol: string;
  logo: string;
  type: string;
}

interface Type {
  name: string;
  selected: boolean;
}

interface Instrument {
  totalShares: string;
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonGrid,
    IonRow,
    IonCol,
    CardComponent,
    TypeComponent,
    InstrumentComponent
  ]
})
export class InvestComponent implements OnInit {
  cards: Card[] = [
    {
      price: '$131.04',
      fullname: 'full name',
      symbol: 'AAPL',
      logo: '/assets/portfolio.svg',
      type: 'Stocks',
    },
    {
      price: '$131.04',
      fullname: 'full name',
      symbol: 'AAPL',
      logo: '/assets/portfolio.svg',
      type: 'ETFs',
    },
    {
      price: '$131.04',
      fullname: 'full name',
      symbol: 'AAPL',
      logo: '/assets/portfolio.svg',
      type: 'Bonds',
    },
    {
      price: '$131.04',
      fullname: 'full name',
      symbol: 'AAPL',
      logo: '/assets/portfolio.svg',
      type: 'Crypto',
    }
  ];

  types: Type[] = [
    { name: 'All', selected: true },
    { name: 'Stocks', selected: false },
    { name: 'ETFs', selected: false },
    { name: 'Bonds', selected: false },
    { name: 'Crypto', selected: false }
  ];

  instruments: Instrument[] = [
    {
      totalShares: '3.0282 shares',
      symbol: 'AAPL',
      price: '$105.44',
      change: '22.90%',
      isPositive: true,
    },
    {
      totalShares: '3.0282 shares',
      symbol: 'MSFT',
      price: '$334.12',
      change: '0.63%',
      isPositive: true,
    },
    {
      totalShares: '3.0282 shares',
      symbol: 'TSLA',
      price: '$243.84',
      change: '2.38%',
      isPositive: false,
    }
  ];

  constructor() { }

  ngOnInit() {}

  selectType(index: number) {
    this.types.forEach((type, i) => {
      type.selected = i === index;
    });
  }
}

