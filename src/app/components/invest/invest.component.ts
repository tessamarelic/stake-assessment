import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface Card {
  title: string;
  subtitle: string;
  icon: string;
  amount: string;
  percentage: string;
  isPositive: boolean;
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
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss'],
  standalone: false
})
export class InvestComponent implements OnInit {
  cards: Card[] = [
    {
      title: 'Portfolio Value',
      subtitle: 'Total balance',
      icon: 'portfolio.svg',
      amount: '$15,136.32',
      percentage: '2.11%',
      isPositive: true
    },
    {
      title: 'Profit & Loss',
      subtitle: 'Total P&L',
      icon: 'circle-dollar.svg',
      amount: '$1,236.12',
      percentage: '8.21%',
      isPositive: true
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
      name: 'Apple Inc',
      symbol: 'AAPL',
      price: '$182.52',
      change: '1.15%',
      isPositive: true,
      image: 'https://logo.clearbit.com/apple.com'
    },
    {
      name: 'Microsoft',
      symbol: 'MSFT',
      price: '$334.12',
      change: '0.63%',
      isPositive: true,
      image: 'https://logo.clearbit.com/microsoft.com'
    },
    {
      name: 'Tesla',
      symbol: 'TSLA',
      price: '$243.84',
      change: '2.38%',
      isPositive: false,
      image: 'https://logo.clearbit.com/tesla.com'
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