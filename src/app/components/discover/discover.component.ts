import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonSearchbar, 
  IonTitle, 
  IonGrid, 
  IonRow, 
  IonCol,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar
} from '@ionic/angular/standalone';
import { CardComponent } from '../../shared/components/card/card.component';
import { TypeComponent } from '../../shared/components/type/type.component';
import { InstrumentComponent } from '../../shared/components/instrument/instrument.component';
import { SearchInstrumentComponent } from 'src/app/shared/components/search-instrument/search-instrument.component';

interface Card {
  price: string;
  fullname: string;
  symbol: string;
  logo: string;
  type: string;
  // title: string; --- IGNORE ---
  // subtitle: string; --- IGNORE ---
  // icon: string; --- IGNORE ---
  // amount: string; --- IGNORE ---
  // percentage: string; --- IGNORE ---
  // isPositive: boolean; --- IGNORE ---
  // additionalContent?: string; --- IGNORE ---
}

interface Type {
  name: string;
  selected: boolean;
}

interface Instrument {
  name: string;
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
  image: string;
}

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, 
    IonHeader, 
    IonSearchbar, 
    IonTitle, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonFab,
    IonFabButton,
    IonIcon,
    CardComponent,
    TypeComponent,
    InstrumentComponent,
    IonSearchbar,
    IonToolbar,
    SearchInstrumentComponent,
  ]
})
export class DiscoverComponent implements OnInit {
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
      name: 'NVIDIA Corp',
      symbol: 'NVDA',
      price: '$118.77',
      change: '3.84%',
      isPositive: true,
      image: 'https://logo.clearbit.com/nvidia.com'
    },
    {
      name: 'Amazon.com Inc',
      symbol: 'AMZN',
      price: '$178.75',
      change: '1.22%',
      isPositive: true,
      image: 'https://logo.clearbit.com/amazon.com'
    },
    {
      name: 'Meta Platforms',
      symbol: 'META',
      price: '$486.18',
      change: '0.91%',
      isPositive: true,
      image: 'https://logo.clearbit.com/meta.com'
    },
    {
      name: 'Alphabet Inc',
      symbol: 'GOOGL',
      price: '$163.71',
      change: '0.32%',
      isPositive: false,
      image: 'https://logo.clearbit.com/google.com'
    }
  ];

  results: Instrument[] = [...this.instruments];

  constructor() { }

  ngOnInit() {}

  handleInput($event: Event) {
    if ($event.target) {
      const target = $event.target as HTMLIonSearchbarElement;
      const query = target.value?.toLowerCase() || '';
      this.results = this.instruments.filter((d) => d.name.toLowerCase().includes(query));
    }
  }
}